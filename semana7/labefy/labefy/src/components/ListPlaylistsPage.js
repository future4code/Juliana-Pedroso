import React from "react";
import axios from "axios";
import DetailsPlaylistsPage from "./DetailsPlaylistsPage";
import { baseUrl, axiosConfig } from "./parameters";
import { ContainerInput, CreateButton, TextSubititle, Paragraph, DeleteButton, DetailsButton } from "./styled";

export default class ListPlaylistsPage extends React.Component {
  state = {
    playlists: [],
    page: true,
  };

  changePage = () => {
    this.setState({ page: !this.state.page });
  };

  componentDidMount = () => {
    this.getAllPlaylists();
  };

  getAllPlaylists = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deletePlaylist = (id) => {
    axios
      .delete(`${baseUrl}/${id}`, axiosConfig)
      .then((response) => {
        this.getAllPlaylists();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <TextSubititle>Lista de Playlists: </TextSubititle>
        {this.state.playlists.map((playlist) => {
          return (
            <div>
              <Paragraph>{playlist.name}</Paragraph>
              {this.state.page ? null : <DetailsPlaylistsPage />}

              <DetailsButton onClick={() => this.changePage()}>
                Detalhes
              </DetailsButton>

              <DeleteButton
                onClick={() => {
                  if (
                    window.confirm(
                      "Tem certeza que desejar excluir esta playlist?"
                    )
                  ) {
                    this.deletePlaylist(playlist.id);
                  }
                }}
              >
                x
              </DeleteButton>
            </div>
    
          );
        })}
        <div>
          <h3>Formulário para adicionar música:</h3>
            <ContainerInput placeholder="nome da música"></ContainerInput>
            <ContainerInput placeholder="nome do artista"></ContainerInput>
            <ContainerInput placeholder="url da música (.mp3)"></ContainerInput>
            <ContainerInput placeholder="adicionar na playlist..."></ContainerInput>
            <CreateButton>Adicionar</CreateButton>
        </div>
      </div>
    );
  }
}
