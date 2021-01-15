import React from "react";
import axios from "axios";
import { axiosConfig, baseUrl } from "./parameters";

export default class CreatePlaylistPage extends React.Component {
  state = {
    inputPlaylist: "",
  };

  handleInputPlaylist = (e) => {
    this.setState({ inputPlaylist: e.target.value });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.inputPlaylist
    };

    axios.post(baseUrl, body, axiosConfig)
    .then((response) => {
        alert('Yessss! Playlist criada com sucesso!')
    })
    .catch((error) => {
        console.log(error)
        alert('Ops! Não foi possível criar a sua playlist :(')
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <input
          placeholder="Digite o nome da playlist"
          onChange={this.handleInputPlaylist}
          value={this.state.inputPlaylist}
        ></input>
        <button onClick={this.createPlaylist}>Criar</button>
      </div>
    );
  }
}
