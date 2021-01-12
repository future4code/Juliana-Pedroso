import React from "react";
import {
  MainContainer,
  InputContainer,
  InputBox,
  ButtonSave,
  ButtonNextPage,
} from "./styled";

export default class Home extends React.Component {
  render() {
    return (
      <MainContainer>
        <ButtonNextPage>Ir para a página de registro</ButtonNextPage>
        <InputContainer>
          <spam>
            <strong>Nome: </strong>
          </spam>
          <InputBox type="text" />

          <spam>
            <strong>Email: </strong>
          </spam>
          <InputBox type="email" />

          <div>
            <ButtonSave>Salvar</ButtonSave>
          </div>
        </InputContainer>
      </MainContainer>
    );
  }
}
