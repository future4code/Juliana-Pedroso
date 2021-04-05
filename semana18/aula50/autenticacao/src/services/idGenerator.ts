/* ----- EXERCÍCIO 1 ----- */

/* a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda 
que seja melhor do que usar números? */
// R. sim, porque usar strings permite maior segurança, uma vez que a combinação de palavras 
// é muito mais efetiva do que uma combinação restrita de números

/* b. A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. 
Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. 
Dado isso, crie uma função para gerar um id.  */
// R. 

import { v4 } from "uuid";

const generateId = (): string => {
  return v4();
};

export default generateId;

