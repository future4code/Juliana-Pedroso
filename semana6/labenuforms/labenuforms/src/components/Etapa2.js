import React from "react";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>
            <strong>ETAPA 2 - INFORMAÇÕES DE ENSINO SUPERIOR</strong>
          </h2>
          <h3>5. Qual o seu curso?</h3>
          <input type="text" required></input>
        </div>

        <div>
          <h3>6. Qual a instituição de ensino?</h3>
          <input type="text" required></input>
        </div>
      </div>
    );
  }
}
