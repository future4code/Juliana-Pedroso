/* -------- LISTA DE EXERCÍCIOS -------- */

// Exercícios de interpretação de código

// EXERCÍCIO 1.

// >> a função conversorDeMoeda pede ao usuário através de um prompt que digite o valor da cotação do Dólar
// >> retorna o valor digitado multiplicado pelo valor a ser declarado em cotacao
// >> a const meuDinheiro armazena a função conversorDeMoeda multiplicada declaração da cotacao, que é de 100
// >> por fim, o console.log imprime o resultado da const meuDinheiro já com o valor calculado

// EXERCÍCIO 2.

// >> a função investeDinheiro recebe 2 parâmetros: tipoDeInvestimento e valor
// >> a variável let valorAposInvestimento armazena o novo valor
// >> a condicinal switch case tipoDeInvestimento vai receber condições diferentes para cada tipo de investimento, exemplo: Poupança, Renda Fixa, CDB
// >> e caso a condição seja igual a variável tipoDeInvestimento, ela executa o que está dentro do bloco, que no caso, é o valor multiplicado por uma taxa correspondente ao tipo de investimento
// >> existe um valor para default caso o usuário digite de forma incorreta
// >> ao final, o return retorna o valor final, o valorAposInvestimento
// >> a const novoMontante armezena a função investeDinheiro e no caso de "Ações", multiplica o valor por 150
// >> a const segundoMontante armazena a função investeDinheiro e no caso do "Tesouro Direto", multiplica o valor por 200
// >> por fim, o console.log imprime o resultado do novoMontante e do segundoMontante, respectivamente
// >> como não existe um case para "Tesouro Direto", o console do segundoMontante vai ser impresso como undefined e alert vai ser acionado

// EXERCÍCIO 3.

// >> const numeros está recebendo um array de vários números
// >> const array1 e const array2 recebem como valor [] vazio
// >> o loop for of vai armazenar em uma variável let numero os números que passarão pela condional if
// >> a condicional if verifica os números pares e se verdadeiro, guarda dentro da const array1
// >> caso contrário, guarda os números dentro da const array2
// >> o primeiro console.log vai imprimir a mensagem "Quantidade total de números" seguida do tamanho do array original
// >> o segundo console.log vai imprimir o tamanho da const array1
// >> e o terceiro console.log vai imprimir o tamanho da const array2

// EXERCÍCIO 4.

// >> const numeros está recebendo um array de vários números
// >> a variável let numero1 está recebendo um valor "Infinity"
// >> a variável let numero2 está recebendo um valor 0 
// >> o loop for of vai armazenar em uma variável let numero os números que passarão pela condicional if
// >> a condional if vai verificar se a nova variável let numero é menor do que a variável let numero1
// >> se true, o valor da let numero1, recebe o valor do menor número do array
// >> e segundo if ele vai verificar se a nova variavel let numero é maior do que a variável let numero2
// se true, o valor da let numero2, recebe o valor do maior número do array
// por fim, o console.log imprime o novo valor de numero1 e numero2, respectivamente


// Exercícios de Lógica de Programação

// EXERCÍCIO 1.

// >> podemos percorrer um array usando laços: while, for e for of
// while:
// let i = 10
//     while(i <= 15){
//         console.log(i)
//         i++
//     }

// for:
//  const frutas = ["morango", "kiwi", "abacate", "maçã", "melão"]
//     for(let i = 0; i < frutas.length; i++){
//         console.log(frutas[i])
//     }

// for of:
// const numeros = [10, 11, 13, 15, 2, 26]
// const numerosPares = []
// const numerosImpares = []

//     for(let numero of numeros){
//         if(numero % 2 === 0){
//             numerosPares.push(numero)
//         } else {
//             numerosImpares.push(numero)
//         }
//     }

// console.log("Números pares: ", numerosPares)
// console.log("Números ímpares: ", numerosImpares)

// EXERCÍCIO 2.

// a. booleano1 && booleano2 && !booleano4
// >> false

// b. (booleano1 && booleano2) || !booleano3
// >> false

// c. (booleano2 || booleano3) && (booleano4 || booleano1)
// >> true

// d. !(booleano2 && booleano3) || !(booleano1 && booleano3)
// >> false

// e. !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
// >> true

// EXERCÍCIO 3.

// let quantidadeDeNumerosPares = 3
// let i = 0
//     while(i < quantidadeDeNumerosPares){
//         console.log(i * 2)
//         i++
//     }

// EXERCÍCIO 4.

// let ladosIguais

// function qualTipoDeTriangulo(a, b, c){
//     if(ladosIguais === a, b, c){
//         console.log("Equilátero")
//     } else if(ladosIguais === a, b){
//         console.log("Isósceles")
//     } else {
//         console.log("Escaleno")
//     }
// }

// console.log(qualTipoDeTriangulo(1, 1, 1))

// EXERCÍCIO 5.

// const primeiroNumero = Number(prompt("Digite um número!"))
// const segundoNumero = Number(prompt("Digite outro número!"))

// if(primeiroNumero > segundoNumero){
//     console.log(`O primeiro número que é: ${primeiroNumero} é maior`)
// } else {
//     console.log(`O segundo número que é: ${segundoNumero} é maior`)
// }

// if(primeiroNumero / segundoNumero % 2 === 0){
//     console.log(`${primeiroNumero} é divisível por ${segundoNumero}`)
// } else {
//     console.log(`${primeiroNumero} não é divisível por ${segundoNumero}`)
// }

// if(primeiroNumero >= segundoNumero){
//     console.log(`A diferença entre eles é de: ${primeiroNumero - segundoNumero}`)
// } else {
//     console.log(`A diferença entre eles é de: ${segundoNumero - primeiroNumero}`)
// }


// Exercícios de Funções

// EXERCÍCIO 1.
// let numerosArray = [2, 3, 5, 8, 10, 23]

// function maioresEmenores(){
//     for(let i = numerosArray.length; i > 1; i--){
//         console.log(numerosArray)
//     }
// }

// EXERCÍCIO 2. 

// let mensagem = (dizSaudacao) =>{
//     alert("Hello, Labenu")
// }

// mensagem()


// Exercícios de Objetos

// EXERCÍCIO 1.

// >> objetos é uma forma de organizar melhor e de forma mais concisa os conteúdos das variáveis