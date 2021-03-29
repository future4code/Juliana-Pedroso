// ----- EXERCÍCIO 3 -----
/* Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve 
adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de 
tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba 
a lista atualizada. 
    $ npm start "Comprar Leite"

Tarefa adicionada com sucesso!

tarefas: [
	"Lavar a louça",
	"Comprar Leite"
] */

const listaTarefas = [
    "Arrumar a casa",
    "Levar o lixo para fora",
    "Limpar a caixinha de areia do gato",
  ];
  
  const novaLista = listaTarefas.push(process.argv[2]);
  console.log(listaTarefas);