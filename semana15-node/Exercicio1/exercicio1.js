// ----- EXERCÍCIO 1 -----
/* a. como fazemos para acessar os parâmetros passados na linha de comando para o Node? */
// R. acessamos através de process.argv[i]

/* b. Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima 
no console uma mensagem que siga a seguinte estrutura: 
    "Olá, (Nome)! Você tem (sua idade) anos." */

const corAzul = "\x1b[34m";

const meuNome = process.argv[2];
const minhaIdadeAtual = Number(process.argv[3]);
console.log(
  `${corAzul} Meu nome é ${meuNome} e minha idade é: ${minhaIdadeAtual} anos`
);

/* c. Altere o programa acima para que mostre também a sua idade daqui a sete anos. */

const minhaIdadeFutura = minhaIdadeAtual + 7;
console.log(`Meu nome é ${meuNome} e minha idade é: ${minhaIdadeAtual} anos e daqui 
    a 7 anos, minha idade será: ${minhaIdadeFutura} anos`);
