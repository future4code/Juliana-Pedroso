// import React from "react";
// import axios from "axios";
// import { baseUrl, axiosConfig } from "./parameters";
// import { ListUsers } from "./styled";

// export default class DetailsUsersPage extends React.Component {
//   state = {
//     users: []
//   };

//   showDetailsUsers = () => {
//     const body = {
//         email: '',
//         name: '',
//         id: ''
//     }
//   }

//   detailsUsers = () => {
//     axios
//       .get(`${baseUrl}/${id}`, body, axiosConfig)
//       .then((response) => {
//         this.setState({ users: response.data });
//       })
//       .catch((error) => {
//         console.log("Não foi possível visualizar detalhes do usuário!");
//       });
//   };


//   render() {
//     return (
//         <div>
//             <h2>Lista detalhada de usuários Labenu: </h2>
//             {this.state.users.map((user) => {
//                 return(
//                     <div>
//                         <ListUsers>{user.name}</ListUsers>
//                         <button onClick={() =>{this.detailsUsers(user.id)}}>Mostrar detalhes</button>
//                     </div>
//                 )
//             })}
//         </div>
//     )
//   }
// }
