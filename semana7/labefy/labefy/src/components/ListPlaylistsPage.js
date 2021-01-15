import axios from "axios";
import React from "react";
import DetailsPlaylistsPage from "./DetailsPlaylistsPage";
import { baseUrl, axiosConfig } from "./parameters";
import { Paragraph, DeleteButton, DetailsButton } from './styled';

export default class ListPlaylistsPage extends React.Component {
  state = {
    playlists: [],
    onPage: true
  };

  componentDidMount = () => {
    this.getAllPlaylists();
  };

  getAllPlaylists = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
        console.log(response.data.result.tracks);
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
      .catch((error) => {});
  };

  onChangePage = () => {
    this.setState({ onPage: !this.state.page });
  };

  //   getAllArtists = () => {
  //     axios
  //     .get(baseUrl, axiosConfig)
  //     .then((response) => {
  //       this.setState({ artists: response.data.result. });
  //       console.log(response.data.result.artist)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   }

  render() {
    console.log(this.state.playlists);
    return (
      <div>
        <h3>Lista de Playlists: </h3>
        {this.state.playlists.map((playlist) => {
          return (
            <div>
              <Paragraph>Nome: {playlist.name}</Paragraph>
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
              <DetailsButton onClick={this.onChangePage}>Detalhes</DetailsButton>
              {this.state.onPage ? <DetailsPlaylistsPage /> : <ListPlaylistsPage />}
              {/* <button onClick={this.changePage}>Home</button> */}
            
            </div>
          );
        })}

        {/* {this.state.artists.map((nameartist) => {
            return(
                <p>Artista: {nameartist}</p>
            )
        })} */}
      </div>
    );
  }
}
