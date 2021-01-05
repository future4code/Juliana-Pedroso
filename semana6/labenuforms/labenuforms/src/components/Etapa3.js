import React from "react";

export default class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>
            <strong>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</strong>
          </h2>
          <h3>6. Por que você não terminou um curso de graduação?</h3>
          <input type="text" required></input>
        </div>

        <div>
          <h3>7. Você fez algum curso complementar?</h3>
          <select name="select" required>
            <option value="nenhum">Nenhum</option>
            <option value="tecnico">Curso técnico</option>
            <option value="idioma">Curso de inglês</option>
            <option value="informatica">Curso de informática</option>
            <option value="outro">Outro</option>
          </select>
        </div>
      </div>
    );
  }
}
