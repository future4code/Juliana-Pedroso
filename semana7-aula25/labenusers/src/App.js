import "./App.css";
import React from "react";
import axios from "axios";
import {
  ButtonNextPage,
  MainContainer,
  InputBox,
  InputContainer,
  ButtonSave,
} from "./components/styled";

export default class App extends React.Component {
  state = {
    users: [],
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

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "juliana-pedroso-epps",
        },
      }
    );

    request
      .then((response) => {
        alert("Usuário criado com sucesso!");
        this.getUsers();
        this.setState({ inputValueName: "" });
        this.setState({ inputValueEmail: "" });
      })
      .catch((error) => {
        alert("Não foi possível criar novo usuário!");
      });
  };

  getUsers = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "juliana-pedroso-epps",
        },
      }
    );

    request
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        alert("Não foi possível exibir a lista de usuários");
      });
  };

  componentDidMount = () => {
    this.getUsers();
  };

  render() {
    const allUsers = this.state.users.map((user) => {
      return <li>{user.name}</li>;
    });

    return (
      <MainContainer className="App">
        <ButtonNextPage>Ir para a página de registro</ButtonNextPage>
        <InputContainer>
          <div>
            <strong>Nome: </strong>
            <InputBox
              type="text"
              onChange={this.onChangeGetUserName}
              value={this.state.inputValueName}
            />
          </div>

          <div>
            <strong>Email: </strong>
            <InputBox
              type="email"
              onChange={this.onChangeGetUserEmail}
              value={this.state.inputValueEmail}
            />
          </div>

          <ButtonSave onClick={this.createUser}>Salvar</ButtonSave>
          <h3>Lista de usuários: </h3>
          {allUsers}
        </InputContainer>
      </MainContainer>
    );
  }
}
