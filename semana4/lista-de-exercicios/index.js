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
// >> arrays é um tipo de dado e eles armazenam dados

// EXERCÍCIO 2.

// function criarRetangulo (lado1, lado2){
//     return {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2 * (lado1 * lado2),
//         area: lado1 * lado2
//     }
// }

// console.log(criarRetangulo(10, 4))

// EXERCÍCIO 3.

//  const filmePredileto = {
//      titulo: "Milagre na Cela 7",
//      ano: 2019,
//      diretor: "Mehmet Ada Öztekin",
//      atoresEAtrizes: ["Aras Bulut İynemli", " Cankat Aydos", " Celile Toyon Uysal", " Deniz Baysal"],
//  }

//  console.log(`Venha assistir ao filme ${filmePredileto.titulo}, ano de lançamento: ${filmePredileto.ano}, dirigido por: ${filmePredileto.diretor} e estrelado por: ${filmePredileto.atoresEAtrizes}`)

// EXERCÍCIO 4.

// const caracteristicasPessoaAleatoria = {
//     nome: "Camila Moraes",
//     idade: 35,
//     email: "camila.moraes@gmail.com",
//     endereco: "Ruas das Oliveias, 57. Praça Profº Antunes Gonzaga. São Paulo"
// }

// function anonimizarPessoa(novaPessoa){
//     return {
//         ...novaPessoa,
//         nome: "ANÔNIMO"
//     }
// }

// console.log(anonimizarPessoa())


// Exercícios de Arrays

// EXERCÍCIO 1.

// a.
// const nomeEIdade = [
//  { nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const somenteAdultos = nomeEIdade.filter((nomeEIdade) => {
//     return nomeEIdade.idade >= 20
// })

// console.log(somenteAdultos)

// b. 
// const nomeEIdade = [
//  { nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const somenteCriancasEJovens = nomeEIdade.filter((nomeEIdade) => {
//     return nomeEIdade.idade < 20
// })

// console.log(somenteCriancasEJovens)

// EXERCÍCIO 2.

// a.
// const array = [1, 2, 3, 4, 5, 6]

// const numerosMultiplicadosPorDois = array.map((numero) => {
//     return 2 * numero
// })

// console.log(numerosMultiplicadosPorDois)
 
// b. 
// const array = [1, 2, 3, 4, 5, 6]

// const numerosMultiplicadosPorTres = array.map((numero) => {
//     const resultado = 3 * numero
//     return resultado.toString()
// })

// console.log(numerosMultiplicadosPorTres)

// c.
// const array = [1, 2, 3, 4, 5, 6]

// const parOuImpar = array.map((numero) => {
//     if(numero % 2 === 0) {
//         return numero + " = par"
//     } else {
//         return numero + " = ímpar"
//     }
// })

// console.log(parOuImpar)

// EXERCÍCIO 3. 

// a.
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const pessoasAutorizadas = pessoas.filter((pessoas) => {
//     return pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60
// })

// console.log(pessoasAutorizadas)

// b. 
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const pessoasNaoAutorizadas = pessoas.filter((pessoas) => {
//     return pessoas.altura < 1.5 || pessoas.idade < 14 || pessoas.idade >= 60
// })

// console.log(pessoasNaoAutorizadas)

// EXERCÍCIO 4. 

// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// const disparaEmail = consultas.filter((consultas) => {
//     if(consultas.cancelada === true){
//         console.log(`Olá, Sr(a). ${consultas.nome}! Estamos enviando esta mensagem para lembrá-lo(a) da sua consulta no dia ${consultas.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
//     } else {
//         console.log(`Olá, Sr(a). ${consultas.nome}! Infelizmente sua consulta marcada para o dia ${consultas.dataDaConsulta} foi cancelada. Caso queira, pode entrar em contato conosco para remarcá-la`) 
//     }
// })

// EXERCÍCIO 5.

// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// contas[0].saldoTotal = 1000 - 600
// contas[1].saldoTotal = 7500 - 1240
// contas[2].saldoTotal = 10000 - 13340
// contas[3].saldoTotal = 100 - 2000
// contas[4].saldoTotal = 1800 - 500
// contas[5].saldoTotal = 1200 - 0

// contas.forEach
// console.log(contas)
