import React from "react";
import axios from "axios";
import DetailsPlaylistsPage from "./DetailsPlaylistsPage";
import { baseUrl, axiosConfig } from "./parameters";
import { Paragraph, Separator, DeleteButton, DetailsButton } from "./styled";

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
      .catch((error) => {});
  };

  render() {
    return (
      <div>
        <h3>Lista de Playlists: </h3>
        {this.state.playlists.map((playlist) => {
          return (
            <div>
              <Paragraph>{playlist.name}</Paragraph>
              {this.state.page ? null : <DetailsPlaylistsPage />}
              <Separator />

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
      </div>
    );
  }
}
