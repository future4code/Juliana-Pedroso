// Exercícios de interpretação de código

// 1. 

/* a. Explique o que o código faz. 
>> o código pede ao usuário para digitar um número usando o prompt
>> com o cast Number, esse valor é transformado em tipo number
>> a condicional if testa se o número digitado é par e caso seja, imprime "Passou no teste"
>> senão, a condicional else imprime "Não passou no teste"

b. Qual o teste que ele realiza? 
>> verifica se o número digitado é par ou ímpar

c. Para que tipos de números ele imprime no console "Passou no teste"? 
>> números pares

d. Para que tipos de números a mensagem é "Não passou no teste"? 
>> números ímpares
*/

// 2.

/* a. Para que serve o código acima?
>> para verificar se a string digitada pelo usário se encaixa em alguma condição;
caso sim, ele retorna um preço espcífico, e caso a fruta não esteja na relação, ele traz um valor genérico (5)

b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
>> o preço da Maça impresso na tela será de 2.25

c. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
>> O preço da fruta Pêra é R$ 5

 */

 // 3. 

 /* a. O que a primeira linha está fazendo?
 >> coletando o número digitado pelo usuário através do prompt e transformando o valor no tipo number

 b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? 
 >> "Esse número passou no teste", porque a condição para a mensagem é: numero ser > do que 0

 c. E se fosse o número -10?
 >> apresentaria um erro, porque não foi definida uma condição quando não atende o argumento, (else)

 d. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
 >> haverá erro, porque o comando console.log está fora do bloco da condição if.
 
 */

 // Exercícios de escrita de código
 
 // 4.

//  const idade = (prompt("Digite a sua idade"))
//  const idadeUsuario = idade

//  if(idadeUsuario >= 18) {
//     console.log("Você pode dirigir!")
//  } else  if(idadeUsuario < 18) {
//     console.log("Você não pode dirigir!")
//  } else {
//      console.log("Digite um número válido!")
//  }

// 5.

// const turnoUsuario = prompt("Digite a sigla do turno em que você estuda: M para matutino, V para vespertino ou então N para noturno").toUpperCase()
// const resposta = turnoUsuario

// if(resposta === "M") {
//     console.log("Bom dia!")
// } else if(resposta === "V") {
//     console.log("Boa tarde!")
// } else if(resposta === "N") {
//     console.log("Boa noite!")
// } else {
//     console.log("Por favor, informe a sigla M, V ou N")
// }

// 6.

// const turnoUsuario = prompt("Digite a sigla do turno em que você estuda: M para matutino, V para vespertino ou então N para noturno").toUpperCase()
// const resposta = turnoUsuario

// switch(resposta) {
//     case "M":
//         console.log("Bom dia!")
//     break
//     case "V":
//         console.log("Boa tarde!")
//     break
//     case "N":
//         console.log("Boa noite!")
//     default:
//         console.log("Por favor, informe a sigla M, V ou N")
// }

// 7.

// const generoFilme = prompt("Digite dentre as opções, o gênero de filme que você vai assistir: fantasia ou terror").toLowerCase()
// const resposta1 = generoFilme
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"))
// const resposta2 = valorIngresso

// if(resposta1 === "fantasia" && resposta2 < 15) {
//     console.log("Bom filme!")
// } else if (resposta1 === "fantasia" && resposta2 >=15) {
//     console.log("Escolha outro filme :(") 
// } else if(resposta1 !=="fantasia" && valorIngresso <= 15) {
//     console.log("Escolha outro filme :(") 
// } else if(resposta1 !== "fantasia" && valorIngresso > 15) {
//     console.log("Escolha outro filme :(")
// } else {
//     console.log("Por favor, preencha corretamente os campos!")
// }

// DESAFIO

//1.

// const generoFilme = prompt("Digite dentre as opções, o gênero de filme que você vai assistir: fantasia ou terror").toLowerCase()
// const resposta1 = generoFilme
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"))
// const resposta2 = valorIngresso
// const snack = prompt("Qual snack para acompanhar o filme? (opções: chocolate, bala de gelatina ou salgadinho)")
// const resposta3 = snack

// if(resposta1 === "fantasia" && resposta2 < 15) {
//     console.log("Bom filme! ... com", snack, "hummmm")
// } else if (resposta1 === "fantasia" && resposta2 >= 15) {
//     console.log("Escolha outro filme :(") 
// } else if(resposta1 !=="fantasia" && valorIngresso <= 15) {
//     console.log("Escolha outro filme :(") 
// } else if(resposta1 !== "fantasia" && valorIngresso > 15) {
//     console.log("Escolha outro filme :(")
// } else {
//     console.log("Por favor, preencha corretamente os campos!")
// }

 






