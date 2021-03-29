# CINEMA 🎬

## Exercícios:

<p><strong>1.</strong> No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas. Para isso, teremos que criar uma tabela para guardar essas informações. 
As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação 1:N. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela
</p>

<p><i>a. Explique o que é uma chave estrangeira</i>

```
chave estrangeira é uma forma de buscar e relacionar informações vindas de outra tabela
```
</p>

<p><i>b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes</i>

```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating
VALUES 
("av1", "Não gosto de filme de comédia", 4, "001"),
("av2", "Um filme interessante", 8, "002"),
("av3", "Conseguiu me tirar algumas risadas", 7, "003"),
("av4", "Melhor filme nacional dos últimos tempos, com uma sacada política que todos deveriam discutir a respeito!", 10, "004");
```
</p>

<p><i>c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*</i>

 ```
informa que não é possível criar a avaliação por conta da restrição da chave estrangeira que está atrelada aos id's existentes na tabela Movie
```
</p>

<p><i>d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating</i>

```
ALTER TABLE Movie DROP COLUMN rating;
```
</p>

<p><i>e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query</i>

```
DELETE from Movie
WHERE title = "Se Eu Fosse Você";

não foi possível excluir a linha com o filme especificado por conta da restrição da chave estrangeira
```
</p>
<br/>

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

<p><i>a. Explique, com as suas palavras, essa tabela</i>

```
essa tabela vai servir como uma tabela auxiliar para unir as chaves estrangeiras das tabelas em comum
```
</p>

<p><i>b. Crie, ao menos, 6 relações nessa tabela</i>

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES
	("001","001"),
    ("002","001"),
    ("004", "003"),
    ("002", "004"),
    ("003", "005"),
    ("003", "004");

```
</p>

<p><i>c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query</i>

```
INSERT INTO MovieCast(movie_id, actor_id)
    VALUES ("005", "003");

ainda a questão da chave estrangeira, que só permite unir informações existentes na tabela de origem, neste caso, não foi possível unir a informação do filme de id 005 ao ator 003, porque o filme não existe
```
</p>

<p><i>d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query</i>

```
INSERT INTO MovieCast(movie_id, actor_id)
    VALUES ("005", "003");

não foi possível excluir a linha com o filme especificado por conta da restrição da chave estrangeira
```
</p>
<br/>

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

<p><i>b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator</i>

```
SELECT movie_id, title, actor_id
FROM Movie RIGHT JOIN MovieCast
ON movie_id = id;
```
</p>

<p><i>c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)</i>

```
SELECT AVG (rate), movie_id, title
FROM Movie JOIN Rating
ON Movie.id = movie_id
GROUP BY (Movie.id);
```
</p>

