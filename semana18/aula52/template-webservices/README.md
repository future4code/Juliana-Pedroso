# Aula52 - Serviços no Backend

### Exercício 1:
Escreva uma função que receba um CEP, faça uma requisição para a url [https://viacep.com.br/ws/:cep/json/](https://viacep.com.br/ws/05424150/json/)  e retorne um objeto contendo:

- Logradouro
- Bairro
- Cidade
- Estado

```
export default async function getAddressInfo(
  cep: string
): Promise<addressInfo | null> {

  try {
    const response = await axios.get(`${baseUrl}/${cep}/json`);

    const {logradouro, bairro, localidade, uf} = response.data;

    return {
      street: logradouro,
      neighborhood: bairro,
      city: localidade,
      state: uf,
    };

  } catch (error) {
    console.log(error.message);

    return null;
  }
}
```
<br/>

### Exercício 2:
No seu banco de dados, crie uma tabela para guardar as seguintes informações de endereço de um usuário:

- CEP
- Logradouro
- Número
- Complemento (opcional)
- Bairro
- Cidade
- Estado

```
CREATE TABLE to_do_list_address (
    zip_code VARCHAR(50) PRIMARY KEY NOT NULL,
    street VARCHAR(50) NOT NULL,
    number INT NOT NULL,
    complement VARCHAR(50) NOT NULL ,
    neighborhood VARCHAR(50),
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL
);
```
<br /> 

### Exercício 3:
Refatore o endpoint de cadastro para ele receba, também, as informações básicas de endereço do usuário (CEP, número e complemento) e preencha todos os campos da tabela criada no exercício anterior.

```

```

