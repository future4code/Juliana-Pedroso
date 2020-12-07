// console.log("Olá mundo!")

// Exercícios de interpretação de código

// 1.

// a. O que vai acontecer no console?
// >> no primeiro console.log ele vai imprimir o resultado da function minhaFuncao que é 2, multiplicado por 5, trazendo o resultado 10
// >> no segundo console.log ele vai imprimir o resultado da function minhaFuncao que é 10, multiplicado por 5, trazendo o resultado 50

// b. O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
// >> ele executaria a mesma função, com a diferença de quele ele não imprimiria o resultado na tela

// 2.

// a. Explicite quais são as saídas impressas no console:
// >> parâmetro de entrada = array
// >> saída = os nomes dos elementos que são menores que 2 no meu array ["Darvas", "Caio"]

// b. Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?
// >> vai imprimir os únicos nomes do meu array ["Amanda", "Caio"], porque o tamanho do array agora é 2

// 3. O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!
// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
        
//     }
  
//     return arrayFinal;
    
// //   }

// >> 

// Exercícios de escrita de código

// 4. 

// a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você:

// function informaSobreMim (){
//    console.log("Eu me chamo Juliana, tenho 27 anos, moro em São Paulo e sou estudante da Labenu. Meu livro predileto é: Meu Pé de Laranja Lima")
// }
// informaSobreMim()

// b. Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e um boolean que representa se é estudante ou não. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem:
// function informaSobreMim (nome, idade, cidadeAtual, ocupacaoEstudante, livroPredileto){

//    console.log("Eu me chamo", nome + ",", "tenho", idade, "anos,", "moro em", cidadeAtual, "e sou", ocupacaoEstudante + ".", "Meu livro predileto é:", livroPredileto)
// }
// informaSobreMim("Juliana", 27, "São Paulo", "estudante da Labenu", "Meu Pé de Laranja Lima")

// 5. 

// a. 
// function somaNumeros (num1, num2){
//     const soma = num1 + num2
//     console.log(soma)
// }
// somaNumeros(110, 35)

// b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo:
// function verificaNumeros (num1, num2){
//     if (num1 >= num2){
//         const maior = true
//         return maior
//     } else {
//         const menor = false
//         return menor
//     }
// }
// console.log(verificaNumeros(230, 56))

// c. Faça uma função que recebe uma mensagem (string) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 `console.log` dentro da função, use outra estrutura de código para isso)
// function imprimeMensagem (mensagem){
//     for (let i = 0; i < 10; i++){
//         console.log("Oi, como vai você?")
//     }
// } 

// imprimeMensagem()

// 6.

// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele:
// function verificaArray (meuArray){
//     for(item of meuArray){
//         console.log(item)
//     }
//     return meuArray.length
// }

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// const tamanhoArray = verificaArray(array)
// console.log("O tamanho do meu array é de: ", tamanhoArray, "itens")

// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não:
// function verificaArrayPar (meuArray){
//     if (meuArray % 2 === 0){
//         const par = true
//         return par
//     } else {
//         const impar = false
//         return impar
//     }
// }
// console.log(verificaArrayPar([12]))

// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele:
// function verificaNumerosPares(meuArray){
//     if (meuArray % 2 === 0){

//         console.log(meuArray)
//     } else {
//         console.log(meuArray)
//     }
// }
// const meuArray = [1, 3, 4, 6, 13, 21, 30]
// verificaNumerosPares(meuArray)