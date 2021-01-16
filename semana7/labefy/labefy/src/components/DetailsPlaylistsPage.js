import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";
import { TextDetails } from "./styled";

export default class DetailsPlaylistsPage extends React.Component {
  // state = {
  //     page: true
  // }

  // changePage = () => {
  //     this.setState( {page: !this.state.page})
  // }

  render() {
    return (
      <div>
        <TextDetails>>> Quantidade: </TextDetails>
        <TextDetails>>> Músicas: </TextDetails>
        <TextDetails>>> Artista: </TextDetails>
        <TextDetails>>> Url: </TextDetails>
      </div>
    );
  }
}
