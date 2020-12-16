import React from 'react';
import './App.css';
import Post from './components/Post/Post';

import ProfilePerfilLabenu from './img/labenu.png';
import ProfilePerfilJuliana from './img/juliana-cristina.jpg';
import ProfilePerfilLivia from './img/livia-gomes.jpg';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'labenu_'}
          fotoUsuario={ProfilePerfilLabenu}
          fotoPost={'https://picsum.photos/200/150?a=1'}
        />

        <Post
          nomeUsuario={'juuhcristina_'}
          fotoUsuario={ProfilePerfilJuliana}
          fotoPost={'https://picsum.photos/200/150?a=2'}
        />

        <Post
          nomeUsuario={'_liviagoms'}
          fotoUsuario={ProfilePerfilLivia}
          fotoPost={'https://picsum.photos/200/150?a=3'}
        />
      </div>
    );
  }
}

export default App;
