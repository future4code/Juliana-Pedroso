import React from "react";

export default class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>
            <strong>ETAPA 1 - DADOS GERAIS</strong>
          </h2>
          <h3>1. Qual o seu nome?</h3>
          <input type="text" required></input>
        </div>

        <div>
          <h3>2. Qual a sua idade?</h3>
          <input type="text" required></input>
        </div>

        <div>
          <h3>3. Qual o seu e-mail?</h3>
          <input type="email" required></input>
        </div>

        <div>
          <h3>4. Qual a sua escolaridade?</h3>
          <select name="select" required>
            <option value="medio-inconpleto">Ensino médio inconpleto</option>
            <option value="medio-completo">Ensino médio completo</option>
            <option value="superior-incompleto">
              Ensino superior incompleto
            </option>
            <option value="superior-completo">Ensino superior completo</option>
          </select>
        </div>
      </div>
    );
  }
}
