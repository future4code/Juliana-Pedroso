import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";

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
      console.log(this.deleteUser)
    try {
      const response = await axios.delete(`${baseUrl}/{id}`, axiosConfig);
      this.getAllUsers();
    } catch (error) {
      console.log(error);
    }
  };



  //   deleteUser = (id) => {
  //     axios
  //       .delete(`${baseUrl}/${id}`, axiosConfig)
  //       .then((response) => {
  //         this.getAllUsers();
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  render() {
    return (
      <div>
        <h2>Lista de usuários Labenu: </h2>
        {this.state.users.map((user) => {
          return (
            <div>
              <li>{user.name}</li>
              <button
                onClick={() => {
                  this.deleteUser(user.id);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
