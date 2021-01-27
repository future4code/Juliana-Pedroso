import React from 'react';
import Home from './components/Home';
import Logo from './img/logo.png';
import { LogoAstroMatch } from './components/styled-components'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <LogoAstroMatch src={Logo} />
      <Home />
      <div>
        <button>Tela de Matches</button>
      </div>
    </div>
  );
}

