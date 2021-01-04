import React from 'react';
import './App.css';

import CardGrande from './components/CardGrande/CardGrande';

import ProfilePicture from './components/img/juliana.jpg';
import Itau from './components/img/logo-itau.png';
import GrupoGraiche from './components/img/logo-graiche.png';

import CardPequeno from './components/CardPequeno/CardPequeno';
import Email from './components/img/logo-email.jpg';
import Endereco from './components/img/logo-endereco.jpg'

import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ProfilePicture}
          nome="Juliana Pedroso" 
          descricao="Olá! Me chamo Juliana, profissional com 7 anos de experiência na área Administrativa com foco em gestão de equipe e desenvolvimento de projetos. Atualmente em transição de carreira para a área de T.I, com interesse em Full-Stack Web Development. Possuo conhecimentos em HTML5, CSS3, JavaScript e React. Fui bolsista pela PrograMaria - Projeto euprogr{amo} e atualmente, estudante Full Stack Web Developer pela Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem={Email}
          nome="E-mail: " 
          descricao="juliana.cristina@hotmail.com.br"
        />

        <CardPequeno 
          imagem={Endereco}
          nome="Endereço: " 
          descricao="Rua São Paulo, 333. Jd. São Paulo."
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Itau}
          nome="ITAÚ UNIBANCO" 
          descricao="Gestão de equipe de técnicos de campo. Controle de atividades pertinentes às atividades desenvolvidas externamente. Gerenciamento de ordens de serviço através da plataforma APREPARA. Elaboração e alimentação de planilhas diversas, documentos de texto e redação de e-mails." 
        />
        
        <CardGrande 
          imagem={GrupoGraiche} 
          nome="GRUPO GRAICHE" 
          descricao="Triagem de todo processo de documentação para admissão de funcionários na área Condominial. Realização de contato com candidatos após aprovação, agendamento de exames admissionais, emissão de Seguro- Desemprego e e-Social, elaboração de prontuário para sequência admissional. Utilização de sistemas ERP (GoSoft, SENIOR e Atentum)." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
          link="https://www.facebook.com/profile.php?id=100002345582996"
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
          link="https://twitter.com/juucristina_"
        />        
      </div>
    </div>
  );
}

export default App;
