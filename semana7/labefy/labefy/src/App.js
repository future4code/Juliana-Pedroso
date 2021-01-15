import React from "react";
import "./App.css";
import { baseUrl, axiosConfig } from "./components/parameters";
import CreatePlaylistPage from "./components/CreatePlaylistPage";
import ListPlaylistsPage from "./components/ListPlaylistsPage";
import { MainContainer } from "./components/styled";

export default class App extends React.Component {
  state = {
    page: true,
  };

  changePage = () => {
    this.setState({ page: !this.state.page });
  };

  render() {
    return (
      <MainContainer>
        <h1>Labefy - Playlists</h1>
        {this.state.page ? <CreatePlaylistPage /> : <ListPlaylistsPage />}
        <button onClick={this.changePage}>Lista de playlists</button>
      </MainContainer>
    );
  }
}
