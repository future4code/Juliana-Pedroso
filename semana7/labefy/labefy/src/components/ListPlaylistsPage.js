import React from "react";
import axios from "axios";
import DetailsPlaylistsPage from "./DetailsPlaylistsPage";
import { baseUrl, axiosConfig } from "./parameters";
import { ContainerInput, CreateButton, TextSubititle, Paragraph, DeleteButton, DetailsButton } from "./styled";

export default class ListPlaylistsPage extends React.Component {
  state = {
    playlists: [],
    page: true,
    name: '',
    artist: '',
    url: '',
    addPlaylist: ''
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

  addTracksToPlaylist = () => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    }
    axios.post(`${baseUrl}/22880161-d2b2-4553-98cb-8d14384d33d6/tracks`, body, axiosConfig)
    .then((response) => {
      alert('Música adicionada com sucesso!')
      this.setState({ name: '', artist: '', url: '', addPlaylist: '' })
    })
    .catch((error) => {
      alert("Não foi possível adicionar essa música :(")
      this.setState({ name: '', artist: '', url: '', addPlaylist: '' })
    })
  }

  changeInputValues = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    console.log(this.state)
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
            <ContainerInput placeholder="nome da música"
            name='name'
            value={this.state.name}
            onChange={this.changeInputValues}
            ></ContainerInput>
            <ContainerInput placeholder="nome do artista"
            name='artist'
            value={this.state.artist}
            onChange={this.changeInputValues}
            ></ContainerInput>
            <ContainerInput placeholder="url da música (.mp3)"
            name='url'
            value={this.state.url}
            onChange={this.changeInputValues}
            ></ContainerInput>
            <ContainerInput placeholder="adicionar na playlist..."
            name='addPlaylist'
            value={this.state.addPlaylist}
            onChange={this.changeInputValues}
            ></ContainerInput>
            <CreateButton onClick={this.addTracksToPlaylist}>Adicionar</CreateButton>
        </div>
      </div>
    );
  }
}
