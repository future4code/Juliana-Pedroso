import "./App.css";
import React from "react";
import { RegisterPage } from "./components/RegisterPage";
import { ListUsersPage } from "./components/ListUsersPage";
import { ButtonNextPage } from "./components/styled";

export default class App extends React.Component {
  state = {
    page: true,
  };

  changePage = () => {
    this.setState({ page: !this.state.page });
  };

  render() {
    return (
      <div className="App">
        <h1>LABENUSERS</h1>
        {this.state.page ? <RegisterPage /> : <ListUsersPage />}
        <ButtonNextPage onClick={this.changePage}>
          Ir para a página de cadastro
        </ButtonNextPage>
      </div>
    );
  }
}
