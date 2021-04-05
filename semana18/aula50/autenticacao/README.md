# Aula50 - Introdução a Autenticação

### Exercício 1:

Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso. 
O uso dele é simples, veja abaixo:

```
import { v4 } from "uuid"

const id = v4();

console.log("Generated Id: ", id);
```
<p><em>a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?</em></p>

``
R. sim, porque usar strings permite maior segurança, uma vez que a combinação de palavras é muito mais efetiva do que uma combinação restrita de números.
``
<p><em>b. A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.</em></p>

```
import { v4 } from "uuid";

const generateId = (): string => {
  return v4();
};

export default generateId;
```
<br/>


### Exercício 2:

Agora que já possuímos um id, podemos começar a modelagem do banco. O nosso usuário precisa ter um email e uma senha salva para que a gente consiga fazer a autenticação dele. 
Na hora de salvar essas informações na tabela, é interessante que façamos uma função específica para isso. Abaixo, há um exemplo:

```
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```

<p><em>a. Explique o código acima com as suas palavrasa. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?</em></p>

``
R. a função createUser vai criar um usuário na tabela aula50_users com o comando de insert quando os campos de verificação forem executados, em caso de e-mail repetido por exemplo, ele vai gerar o erro 409 ("email já castrado").
``

<p><em>b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.</em></p>

```
CREATE TABLE aula50_users (
	id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

<p><em>c. Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.</em></p>

```
const aula50_users = "User";

	 const createUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(aula50_users);
	};
```

<br /> 

### Exercício 3:
Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:
- os dados que serão salvos no token (no nosso caso, o id);
- a chave secreta usada pra criptografar o token;
- algumas configurações, como o tempo de expiração

```
import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
```

<p><em>a. O que a linha as string faz? Por que precisamos usar ela ali?</em></p>

``
R. informa que o arquivo JWT_KEY está vindo como um texto, ela servirá como core do nosso token.
``

<p><em>b. Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.</em></p>

```
const expiresIn = "1min";
const generateToken(input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

type AuthenticationData = {
  id: string;
}

export default generateToken;
```

<br />

### Exercício 4:
Pronto, com essas três funções preparadas podemos criar o nosso endpoint. As informações dele são:

- Verbo/Método: POST
- Path: `/user/signup`
- Input: O body da requisição deve ser:
```
{
	"email": "email do usuário",
	"password": "senha do usuário"
}
```

- Output: O body da resposta deve ser:
```
{
	"token": "token gerado pelo jwt"
}
```
<p><em>a. Crie o endpoint que realize isso, com as funções que você implementou anteriormente.</em></p>

```
export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      const [user] = await connection('aula50_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('E-mail already registered')
      }

      const id: string = generateId()

      const newUser: user = { id, email, password }

      await connection('aula50_users')
         .insert(newUser)

      const token: string = generateToken({ id })

      res.status(201).send({ newUser, token })

   } catch (error) {
      console.log(error)

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}
```
<p><em>b. Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um "@"</em></p>

```
export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

      const { email, password } = req.body

      const [user] = await connection('aula50_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('E-mail already registered')
      }

      const id: string = generateId()

      const newUser: user = { id, email, password }

      await connection('aula50_users')
         .insert(newUser)

      const token: string = generateToken({ id })

      res.status(201).send({ newUser, token })

   } catch (error) {
      console.log(error)

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}
```
<p><em>c. Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais.</em></p>

```
export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

      const { email, password } = req.body

      const [user] = await connection('aula50_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('E-mail already registered')
      }

      const id: string = generateId()

      const newUser: user = { id, email, password }

      await connection('aula50_users')
         .insert(newUser)

      const token: string = generateToken({ id })

      res.status(201).send({ newUser, token })

   } catch (error) {
      console.log(error)

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}
```

<br />

### Exercício 5:


### Exercício 6:


### Exercício 7:


### Exercício 8: