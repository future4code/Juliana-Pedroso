import React from "react";
import "./App.css";
import CreatePlaylistPage from "./components/CreatePlaylistPage";
import ListPlaylistsPage from "./components/ListPlaylistsPage";
import { MainContainer, Header, ImageLogo, WelcomeMessage, ManagePlaylists } from "./components/styled";
import Logo from './img/LABEFY.png';

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
        <ImageLogo src={Logo} alt="logo"></ImageLogo>
        <Header>Labefy - Playlists </Header>
          <WelcomeMessage>Bem-vindx ao Labefy!</WelcomeMessage>
        {this.state.page ? <CreatePlaylistPage /> : <ListPlaylistsPage />}

        <ManagePlaylists onClick={this.changePage}>Gerenciar playlists</ManagePlaylists>
      </MainContainer>
    );
  }
}
