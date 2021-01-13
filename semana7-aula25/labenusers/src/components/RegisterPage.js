import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";

export class RegisterPage extends React.Component {
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
        <h2>Cadastro de usuários: </h2>
        <input
          placeholder="Nome"
          onChange={this.onChangeGetUserName}
          value={this.state.inputValueName}
        />

        <input
          placeholder="Email"
          onChange={this.onChangeGetUserEmail}
          value={this.state.inputValueEmail}
        />

        <button onClick={this.createUser}>Cadastrar</button>
      </div>
    );
  }
}
