// Exercícios de interpretação de código

// 1.
// a. true 

// b. false

// c. true

// boolean

// 2.
// a. undefined

// b. null

// c. 11

// d. 3

// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// f. 9

// Exercícios de escrita de código

// 1.

const idade = prompt("Qual é a sua idade?")
const idadeUsario = Number(idade)
console.log(typeof idadeUsario)

const idadeAmigx = prompt("Qual é a idade da sua melhor amiga?")
const idadeMigx = Number(idadeAmigx)
console.log(typeof idadeMigx)

const resultado = idadeUsario > idadeMigx
console.log("Sua idade é maior do que a da sua melhor amiga?", resultado)

const diferenca = Number(idadeUsario) - (idadeMigx)
console.log("A diferença de idade é de: ", diferenca)

// 2. 

const numeroPar = prompt("Digite um número par")
const converte = Number(numeroPar)
console.log(numeroPar % 2)
// todos os números pares, recebem como resto da divisão o número 0

// inserindo o número ímpar, ele traz como resto da operação, um número dizerente de 0, no caso de 3, trouxe como resto 1

// 3.

let listaDeTarefas = []
const pergunta1 = prompt("Qual é a sua tarefa pela manhã?")
const resposta1 = pergunta1
listaDeTarefas.push(resposta1)
console.log(listaDeTarefas)

const pergunta2 = prompt("Qual é a sua tarefa pela tarde?")
const resposta2 = pergunta2
listaDeTarefas.push(resposta2)
console.log(listaDeTarefas)

const pergunta3 = prompt("Qual é a sua tarefa pela noite?")
const resposta3 = pergunta3
listaDeTarefas.push(resposta3)
console.log(listaDeTarefas)

const perguntaTarefa = prompt("Indique o índice da tarefa que você já realizou hoje: 0, 1 ou 2")
console.log("Sua tarefa realizada hoje foi: ", perguntaTarefa)
const respostaTarefa = perguntaTarefa
listaDeTarefas.splice(respostaTarefa, 1)
console.log(listaDeTarefas)

// 4.

const nomeUsuario = prompt("Qual é o seu nome?")
const emailUsuario = prompt("Qual é o seu e-mail?")

console.log("O e-mail", emailUsuario, "foi cadastrado com sucesso. Seja bem-vindx,", nomeUsuario)

// DESAFIO

// a.
const valor1 = 77
const resultado1 = (valor1 - 32) * (5/9) + (273.15)
console.log("77°F em K = ", resultado1)

// b.
const valor2 = 80
const resultado2 = (valor2) * (9/5) + (32)
console.log("80° em F = ", resultado2)

const valor3 = 30
const resultado3 = (valor3) * (9/5) + (32)
const resultado4 = (valor3) + (273.15)
console.log("30° em F e K respectivamente é = ", resultado3, ",", resultado4)






