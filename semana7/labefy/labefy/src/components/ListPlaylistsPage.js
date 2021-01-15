import axios from "axios";
import React from "react";
import { baseUrl, axiosConfig } from "./parameters";
import { Paragraph, DeleteButton } from './styled';

export default class ListPlaylistsPage extends React.Component {
  state = {
    playlists: [],
    // artists: []
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
