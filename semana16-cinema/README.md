# PROJETO CINEMA

### Exercícios:

<p><strong>1.</strong> No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas. Para isso, teremos que criar uma tabela para guardar essas informações. 
As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação 1:N. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela
</p>
<br/>

<p><i>a. Explique o que é uma chave estrangeira</i>

```
chave estrangeira é uma forma de buscar e relacionar informações vindas de outra tabela
```
</p>

<p><i>b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes</i>
</p>

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

<p><i>c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*</i>
</p>

 ```
informa que não é possível criar a avaliação por conta da restrição da chave estrangeira que está atrelada aos id's existentes na tabela Movie
```

<p><i>d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating</i>
</p>

```
ALTER TABLE Movie DROP COLUMN rating;
```

<p><i>e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query</i>
</p>
