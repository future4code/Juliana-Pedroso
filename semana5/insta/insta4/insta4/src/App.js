import React from 'react';
import './App.css';
import Post from './components/Post/Post';

import ProfilePerfilLabenu from './img/labenu.png';
import ProfilePerfilJuliana from './img/juliana-cristina.jpg';
import ProfilePerfilLivia from './img/livia-gomes.jpg';

class App extends React.Component {
  state = {
    listaDePosts: [
      {
      nomeUsuario: 'labenu_',
      fotoUsuario: 'https://picsum.photos/200/300?a=1',
      fotoPost: 'https://picsum.photos/200/300?a=2',
      }, 
      {
      nomeUsuario: 'juuhcristina_',
      fotoUsuario: 'https://picsum.photos/200/300?a=3',
      fotoPost: 'https://picsum.photos/200/300?a=4',
      },
      {
      nomeUsuario: '_bananinha',
      fotoUsuario: 'https://picsum.photos/200/300?a=5',
      fotoPost: 'https://picsum.photos/200/300?a=6',
      }
    ],
    textoNovoPost: '',
    
  }

  onChangeTextoNovoPost = (e) => {
    this.state({textoNovoPost: e.target.value})
  }

  adicionarPost = () => {
    console.log('ADICIONAR POST', this.state.textoNovoPost)
  }

  render() {
    const listaDePosts = this.state.listaDePosts.map((post) =>{
      return (
        <Post 
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })
    return (
      <div className={'app-container'}>
          <div>
            <input placeholder="Nome de usuário"
              type="text"
              onChange={this.onChangeTextoNovoPost}
              value={this.state.textoNovoPost}
            />
            <div>
            <input placeholder="Foto Usuário"
              type="text"
              onChange={this.onChangeTextoNovoPost}
              value={this.state.textoNovoPost}
            />
            </div>
            <div>
            <input placeholder="Foto Post"
              type="text"
              onChange={this.onChangeTextoNovoPost}
              value={this.state.textoNovoPost}
            />
            </div>
            <button onClick={this.adicionarPost}>Adicionar Post</button>
          </div>
        </div>
      );
    }
  }

export default App;
        {/* <Post
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
        /> */}
//       </div>
//     );
//   }
// }

// export default App;
