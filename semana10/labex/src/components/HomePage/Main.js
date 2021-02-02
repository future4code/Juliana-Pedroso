import React from "react";
import { ContainerMain, ContainerFilter } from "./styled";

export default function Main() {
  return (
    <ContainerMain>
      <ContainerFilter>
        <div className="space stars1"></div>
        <p>Pesquisar viagens disponíveis</p>
        <label>Título da viagem</label>
          <input className="search-title" placeholder="Busca por título"></input>
        <div>
          <label>Data da viagem</label>
          <input className="search-date" placeholder="Ex. xx/xx/xxxx"></input>
        </div>
        <div>
          <button>Buscar</button>
        </div>
      
      </ContainerFilter>
        <div className='grid-trips'></div>
    </ContainerMain>
  );
}
