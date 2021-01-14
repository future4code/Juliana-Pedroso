import React from 'react';
import './App.css';
import axios from 'axios';
import { MainContainer, PhraseInicial, Title, ButtonShowDetails, Informations } from './styled';
import { baseUrl } from './parameters';

export default class App extends React.Component {
  state = {
    title: [],
    created: '',
    director: '',
    episode_id: null,
  }

  componentDidMount = () => {
    this.getFilmsStarWars()
  }

  getFilmsStarWars = () => {
    axios.get('https://swapi.dev/api/films/3/')
    .then((response) => {
      this.setState({
        title: response.data.title,
        created: response.data.created,
        director: response.data.director,
        episode_id: response.data.episode_id,
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getById = (e) => {
    axios.get(`${baseUrl}/films/${e.target.value}`)
  }

  render() {

    console.log(this.state)
    return(
      <MainContainer>
        <PhraseInicial><i>“a long time ago, in a galaxy far, far away…”</i></PhraseInicial>
        <Title>GOSTA DE FILMES DE STAR WARS?</Title>
        <ButtonShowDetails onClick={this.getFilmsStarWars}>Então clica aqui para ficha técnica!</ButtonShowDetails>
        
        <select onChange={this.getById}>
          <option>Escolha um filme</option>
          {/* {this.state.title.map((titulo) => {
            return (
            <option value={films.episode_id}>{titulo.films}</option>
            )
          })} */}
        </select>

        <Informations><strong>Título: </strong>{this.state.title}</Informations>
        <Informations><strong>Criação: </strong>{this.state.created}</Informations>
        <Informations><strong>Diretor: </strong>{this.state.director}</Informations>
        <Informations><strong>Episódio: </strong>{this.state.episode_id}</Informations>

      </MainContainer>
    )
  }
}

