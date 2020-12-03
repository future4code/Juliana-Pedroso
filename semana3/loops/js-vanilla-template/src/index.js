// Exercícios de interpretação de código

/* 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
>> ele está recendo incremento de 1 no seu array de tamanho 4 sempre o que o loop é executado 
e no final, ele soma o resultado com seu próprio valor, totalizando 10 */

/* 2. 

a. O que vai ser impresso no console?
>> este código está verificando os números no array que são maiores do que 18 e imprimindo na tela [19, 20, 21, 23, 25, 27, 30]

b. Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?*/
// !!!!!const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let num = 0

// for (let num of lista) {
//     console.log(lista + num[0])
//     num ++
// }


// DESAFIO 1

// seria impresso na tela 4 linhas começando com 0 e sendo acrescido de + um 0 a cada nova linha
/* 0 
   00
   000
   0000 */

// 3.

// a.
// const arrayOriginal = [0, 2, 4, 6, 8, 10]
// for(let numero of arrayOriginal){
//     console.log(numero)
// }

// b. 
// const arrayOriginal = [0, 17, 19, 6, 83, 10]
// for(let numero of arrayOriginal){
//     console.log(numero / 10)
// }

// c. 
// const arrayOriginal = [0, 17, 19, 6, 83, 10]
// for(let numero of arrayOriginal) {
//     if(numero % 2 === 0) {
//         console.log(numero)
//     }
// }

// d. 
// const arrayOriginal = [0, 17, 19, 6, 83, 10]
//     console.log("O elemento do index", [0], "é: ", arrayOriginal[0])
//     console.log("O elemento do index", [1], "é: ", arrayOriginal[1])
//     console.log("O elemento do index", [2], "é: ", arrayOriginal[2])
//     console.log("O elemento do index", [3], "é: ", arrayOriginal[3])
//     console.log("O elemento do index", [4], "é: ", arrayOriginal[4])
//     console.log("O elemento do index", [5], "é: ", arrayOriginal[5])

// e.
// const arrayOriginal = [0, 17, 19, 6, 83, 10]
// let maior = 0

// for(let i = 0; i < arrayOriginal.length; i++){
//   if (arrayOriginal[i] > maior){
//     maior = arrayOriginal[i]
//   }
// }
// console.log("O número maior é: ", maior)

// DESAFIO 2

// const numeroUsuario = Number(prompt("Escolha um número"))
// alert("Vamos jogar!")

// const descobrirNumero = Number(prompt("Advinhe o número"))
// while (descobrirNumero !== numeroUsuario) {
//     console.log("Errou... o número chutado é")
// }



 






