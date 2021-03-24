import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";
import { ContainerList, ListUsers, Subheading, ButtonRemove } from "./styled";
// import DetailsUsersPage from "./DetailsUsersPage";

export class ListUsersPage extends React.Component {
  state = {
    users: [],
    // page: true
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

//   changePage = () => {
//     this.setState({ page: !this.state.page });
//   };

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
        <Subheading>Lista de usuários Labenu: </Subheading>
        {this.state.users.map((user) => {
          return (
            <ContainerList>
              <ListUsers>{user.name}</ListUsers>
              <ButtonRemove
                onClick={() => {if(window.confirm('Tem certeza que desejar excluir este usuário?')){
                  this.deleteUser(user.id);
                }}}
              >
                x
              </ButtonRemove>
              <p> ― </p>
              {/* {this.state.page ? <DetailsUsersPage /> : <ListUsersPage />}
              <button onClick={this.changePage}>Detalhes</button> */}
            </ContainerList>
          );
        })}
      </div>
    );
  }
}
