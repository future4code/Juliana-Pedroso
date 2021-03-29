# FILTROS, ORDENAÇÃO E PAGINAÇÃO

## Exercícios:

<p><strong>1.</strong> Vamos utilizar o SQL e o Typescript abaixo para fazer os exercícios de hoje. Recomendamos a utilização de um padrão como o do template do exercício de aula, ou mesmo o próprio template, para a separação de endpoint e query.
</p>

<p><i>a. Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por nome. Este nome deve ser enviado por query params.</i>

```
app.get("/users/search/name", async (req: Request, res: Response) => {

   try {

      const name = req.query.name;

      if (!name) {
         throw new Error("Please send a valid name");
      }

      const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE aula48_exercicio.name like "%${name}%"
      `);

      if (!result[0].length) {
         throw new Error("User not found")
      }

      res.status(200).send(result[0]);
      
   } catch (error) {
      res.status(400).send({message: error.message})
      
   }
})
```
</p>

<p><i>b. Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por tipo de user. O tipo de user deve ser passado por path params.</i>

```
app.get("/users/search/type", async (req: Request, res: Response) => {

    try {
 
       const type = req.query.type;
 
       if (!type) {
          throw new Error("Please send a valid type");
       }
 
       const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE aula48_exercicio.type like "%${type}%"
       `);
 
       if (!result[0].length) {
          throw new Error("Type not found")
       }
 
       res.status(200).send(result[0]);
       
    } catch (error) {
       res.status(400).send({message: error.message})
       
    }
 })
```
</p>

<p><strong>2.</strong> Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user. A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email.
</p>

```
app.get("/users/search", async (req: Request, res: Response) => {

    try {
 
       const name = req.query.name;
       let orderBy = req.query.orderBy as string
       let orderType = req.query.orderType as string
 
       if (!name) {
          throw new Error("Please send a valid name");
       }

       if (orderBy !== "name" && orderBy !== "type") {
            orderBy = "email"
       }

       if (orderType.toUpperCase() !== "ASC" && orderType.toUpperCase() !== "DESC") {
           orderType = "ASC"
       }
 
       const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE aula48_exercicio.name like "%${name}%"
       ORDER BY ${orderBy} ${orderType};
       `);
 
       if (!result[0].length) {
          throw new Error("User not found")
       }
 
       res.status(200).send(result[0]);
       
    } catch (error) {
       res.status(400).send({message: error.message})
       
    }
 })
```
</p>

<p><strong>3.</strong> Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, e permita que o usuário possa passar a página que deseja ver. O número da página deve ser passado por query params. 
</p>

```
app.get("/users/search/order", async (req: Request, res: Response) => {

  try {

    const name = req.query.name
    let orderBy = req.query.orderBy as string
    let orderType = req.query.orderType as string
    let page = req.query.page

    if (!name) {
      throw new Error("Please send a valid name");
    }

    if (orderBy !== "name" && orderBy !== "type") {
      orderBy = "email";
    }

    if (
      orderType.toUpperCase() !== "ASC" &&
      orderType.toUpperCase() !== "DESC"
    ) {
      orderType = "ASC";
    }

    if (isNaN(Number(page)) || Number(page) < 1) {
        page = "1"
    }

    const limit = 5
    const offset = limit * (Number(page) - 1)

    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE aula48_exercicio.name like "%${name}%"
       ORDER BY ${orderBy} ${orderType}
       LIMIT ${limit}
       OFFSET ${offset};
       `);

    if (!result[0].length) {
      throw new Error("User not found");
    }

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
```
</p>

<p><strong>4.</strong> Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, a ordenação e a paginação). Atribua valores padrão para filtragem, ordenação e paginação para que:
</p>

<p><i>a. Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users.</i>

```



```
</p>
<br/>

<p><i>b. Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users.</i>

```



```
</p>
<br/>

<p><i>c. Caso o usuário não forneça número de página, deve começar na página 1</i>

```



```
</p>
<br/>

