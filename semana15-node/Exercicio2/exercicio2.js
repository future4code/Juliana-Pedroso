// ----- EXERCÍCIO 2 -----
/* Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois 
valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 
valores fornecidos. */

const corMagenta = "\x1b[35m";
const corVerde = "\x1b[32m";
const corAmarelo = "\x1b[33m";
const corCiano = "\x1b[36m";

const primeiroNumero = Number(process.argv[2]);
const segundoNumero = Number(process.argv[3]);

const soma = primeiroNumero + segundoNumero;
console.log(
  `${corMagenta} A soma de ${primeiroNumero} com ${segundoNumero}, resulta em: ${soma}`
);

const subtracao = primeiroNumero - segundoNumero;
console.log(
  `${corVerde} A subtração de ${primeiroNumero} com ${segundoNumero}, resulta em: ${subtracao}`
);

const multiplicacao = primeiroNumero * segundoNumero;
console.log(
  `${corAmarelo} A multiplicação de ${primeiroNumero} por ${segundoNumero}, resulta em: ${multiplicacao}`
);

const divisao = primeiroNumero / segundoNumero;
console.log(
  `${corCiano} A divisão de ${primeiroNumero} por ${segundoNumero}, resulta em: ${divisao}`
);
