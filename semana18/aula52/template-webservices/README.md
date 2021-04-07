# Aula52 - Serviços no Backend

### Exercício 1:
Escreva uma função que receba um CEP, faça uma requisição para a url [https://viacep.com.br/ws/:cep/json/](https://viacep.com.br/ws/05424150/json/)  e retorne um objeto contendo:

- Logradouro
- Bairro
- Cidade
- Estado

```
export default async function getAddressInfo(
  cep: string
): Promise<addressInfo | null> {

  try {
    const response = await axios.get(`${baseUrl}/${cep}/json`);

    const {logradouro, bairro, localidade, uf} = response.data;

    return {
      street: logradouro,
      neighborhood: bairro,
      city: localidade,
      state: uf,
    };

  } catch (error) {
    console.log(error.message);

    return null;
  }
}
```
<br/>

### Exercício 2:
No seu banco de dados, crie uma tabela para guardar as seguintes informações de endereço de um usuário:

- CEP
- Logradouro
- Número
- Complemento (opcional)
- Bairro
- Cidade
- Estado

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

<br /> 

### Exercício 3:
Refatore o endpoint de cadastro para ele receba, também, as informações básicas de endereço do usuário (CEP, número e complemento) e preencha todos os campos da tabela criada no exercício anterior.

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

