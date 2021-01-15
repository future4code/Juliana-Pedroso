import React from 'react';
import './App.css';
import { baseUrl, axiosConfig } from './components/parameters';
import CreatePlaylistPage from './components/CreatePlaylistPage'
import { MainContainer } from './components/styled'

export default class App extends React.Component {
  render() {
    return(
      <MainContainer>
        <h1>Labefy - Criação de playlists</h1>
        <CreatePlaylistPage></CreatePlaylistPage>
      </MainContainer>
    )
  }
}
