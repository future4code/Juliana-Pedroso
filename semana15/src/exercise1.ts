/* ----- EXERCÍIO 1 ----- */
/* a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir 
um número a esta variável. O que acontece? */
// R. me apresenta um erro, dizendo que o nosso valor "number" não pode ser atribuído na minha declaração de string.

let minhaString: string = "Astrodev";
// minhaString = 0;

/* b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos 
fazer para que essa variável também aceite strings? */
// R. utilizando o union type | e na sequência, definindo a tipagem como string

let meuNumero: number | string = 13;
meuNumero = "Astrodev";

/* c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
    nome, que é uma string;
    idade, que é um número;
    corFavorita, que é uma string. */
// R.

const informacoesPessoais: {
  nome: string;
  idade: number;
  corFavorita: string;
} = {
  nome: "Astrodev",
  idade: 21,
  corFavorita: "laranja",
};

const informacoesAcademicas: {
  formacao: string;
  conclusao: boolean;
  atuacao: boolean;
} = {
  formacao: "Robótica",
  conclusao: true,
  atuacao: true,
};

const informacoesProfissionais: {
  ultimaEmpresa: string;
  periodo: string;
  atividades: string;
} = {
  ultimaEmpresa: "Labenu",
  periodo: "desde sempre",
  atividades: "Enviar de forma automática lembretes aos alunos da Labenu",
};

/* d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. 
Utilize um enum para isso. */
// R.

enum CORES_DO_ARCOIRIS {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta",
}

type CoresArcoIris = {
  cores: CORES_DO_ARCOIRIS;
};

const corEscolhida = {
  cores: CORES_DO_ARCOIRIS.ANIL,
};
