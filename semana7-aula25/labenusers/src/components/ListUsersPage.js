import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";
import { ListUsers, ButtonRemove } from "./styled";

export class ListUsersPage extends React.Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig);
      this.setState({ users: response.data });
    } catch (error) {
      console.log("erro: " + error);
    }
  };

  deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`, axiosConfig);
      this.getAllUsers();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h2>Lista de usuários Labenu: </h2>
        {this.state.users.map((user) => {
          return (
            <div>
              <ListUsers>{user.name}</ListUsers>
              <ButtonRemove
                onClick={() => {if(window.confirm('Tem certeza que desejar excluir este usuário?')){
                  this.deleteUser(user.id);
                }}}
              >
                x
              </ButtonRemove>
            </div>
          );
        })}
      </div>
    );
  }
}
