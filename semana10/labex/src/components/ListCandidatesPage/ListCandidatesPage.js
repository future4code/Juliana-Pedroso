import React, { useState, useEffect } from "react";
import { ContainerList, CardTripsList } from "./styled";
import axios from "axios";
import { baseUrl, user } from "../parameters";

export default function ListTripsPage(props) {
  const [tripId, setTripId] = useState("");

  useEffect(() => {
    axios.get(`${baseUrl}/${user}/${tripId}`);
  }, []);

  return (
    <ContainerList>
      <h2>Página com a lista dos candidatos por viagem</h2>
      <CardTripsList>
        <p>Astrodev</p>
        <p>Viagem: Baila comigo em Saturno</p>
        <p>Planeta: Saturno</p>
        <p>Descrição: Quero muito irrrrr!!!!!</p>
        <div className="grid-buttons">
          <button className="ok">Aprovado</button>
          <button className="no-ok">Reprovado</button>
        </div>
        <hr />
        <p>Bananinha</p>
        <p>Viagem: Picnic de Inverno em Plutão</p>
        <p>Planeta: Plutão</p>
        <p>Descrição: Sou o candidato perfeito para embarcar nessa aventura</p>
        <div className="grid-buttons">
          <button className="ok">Aprovado</button>
          <button className="no-ok">Reprovado</button>
        </div>
        <hr />
      </CardTripsList>
    </ContainerList>
  );
}
