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