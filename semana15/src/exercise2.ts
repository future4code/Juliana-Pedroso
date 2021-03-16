/* ----- EXERCÍIO 2 ----- */
/* dada a função:
    function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

    a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça 
a tipagem desses parâmetros */

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}

/* b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas  */
// R. existe uma variável sort para ordenação, do tipo crescente, uma variaável de repetição 
// for e uma variável do tipo objeto que armazema 3 propriedades: maior, menor e media

/* c. Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e 
obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript: 
    const amostraDeIdades = {

		numeros: [21, 18, 65, 44, 15, 18],

		obterEstatisticas: (numeros) => {...}
} */
// R.

type AmostraDeDados = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: ,
}

