import React from "react";
import "./App.css";
import { baseUrl, axiosConfig } from "./components/parameters";
import CreatePlaylistPage from "./components/CreatePlaylistPage";
import ListPlaylistsPage from "./components/ListPlaylistsPage";
import { MainContainer, Header, ImageLogo, WelcomeMessage, ShowLists } from "./components/styled";
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
        <Header>Labefy - Playlists</Header>
          <WelcomeMessage>Bem-vindx ao Labefy!</WelcomeMessage>
        {this.state.page ? <CreatePlaylistPage /> : <ListPlaylistsPage />}
        <ShowLists onClick={this.changePage}>Lista de playlists</ShowLists>
      </MainContainer>
    );
  }
}
