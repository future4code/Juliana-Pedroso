# FILTROS, ORDENAÇÃO E PAGINAÇÃO

## Exercícios:

<p><strong>1.</strong> Vamos utilizar o SQL e o Typescript abaixo para fazer os exercícios de hoje. Recomendamos a utilização de um padrão como o do template do exercício de aula, ou mesmo o próprio template, para a separação de endpoint e query.
</p>

<p><i>a. Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por nome. Este nome deve ser enviado por query params.</i>

```
app.get("/users/search", async (req: Request, res: Response) => {

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
app.get("/users/search", async (req: Request, res: Response) => {

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

<p><strong>2.</strong> Algo muito importante que está faltando na nossa aplicação é representar o elenco dos filmes. Até agora, possuímos uma tabela com os filmes e outra tabela com os atores. Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação N:M.

```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
</p>

<p><strong>3.</strong> Para ler informações dessas tabelas, nós podemos aproveitar a relação entre elas e já juntar informações delas duas. Isso pode ser feito através do operador JOIN. 
</p>

<p><i>a. Explique, com suas palavras, a query acima. O que é o operador ON?</i>

```
ele é a condição para buscas em mais de uma tabela, unindo os registros em uma única
```
</p>

<p><i>b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.</i>

```
SELECT title, movie_id,  rate
FROM Movie JOIN Rating
ON Movie.id = Rating.movie_id;
```
</p>
<br/>

<p><strong>4.</strong> Existem outros dois operadores do tipo JOIN: LEFT JOIN e RIGHT JOIN. O primeiro retorna todas as ocorrências da primeira tabela (à esquerda) e, então, procura todas as correspondências dessa tabela na outra. O segundo operador retorna todas as ocorrências da segunda tabela (à direita) e, então, procura todas as correspondências na outra tabela. 
</p>

<p><i>a. Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário</i>

```
SELECT title, movie_id,  rate, comment
FROM Movie LEFT JOIN Rating
ON Movie.id = Rating.movie_id;
```
</p>

