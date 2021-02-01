import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";
import { Subheading, ButtonSave, InputBox } from "./styled";

export class RegisterUsersPage extends React.Component {
  state = {
    inputValueName: "",
    inputValueEmail: "",
  };

  onChangeGetUserName = (event) => {
    this.setState({ inputValueName: event.target.value });
  };

  onChangeGetUserEmail = (event) => {
    this.setState({ inputValueEmail: event.target.value });
  };

  createUser = () => {
    const body = {
      name: this.state.inputValueName,
      email: this.state.inputValueEmail,
    };

    axios
      .post(baseUrl, body, axiosConfig)
      .then((response) => {
        alert("Usuário criado com sucesso!");
        this.setState({ inputValueName: "" });
        this.setState({ inputValueEmail: "" });
      })
      .catch((error) => {
        alert("Não foi possível criar novo usuário!");
      });
  };

  render() {
    return (
      <div>
        <Subheading>Cadastro de usuários: </Subheading>
        <InputBox
          placeholder="Nome"
          onChange={this.onChangeGetUserName}
          value={this.state.inputValueName}
        />

        <InputBox
          placeholder="Email"
          onChange={this.onChangeGetUserEmail}
          value={this.state.inputValueEmail}
        />

        <ButtonSave onClick={this.createUser}>Cadastrar</ButtonSave>
      </div>
    );
  }
}
