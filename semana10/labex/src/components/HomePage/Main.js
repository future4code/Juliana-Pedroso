import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ContainerMain,
  ContainerFilter,
  CardContainer,
  GridMain,
} from "./styled";
import { baseUrl, user } from "../parameters";

export default function Main() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${user}/trips`)
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <GridMain>
          {trips.map((trip) => {
            return (
              <CardContainer>
                <h1>{trip.name}</h1>
                <p>Planeta: {trip.planet}</p>
                <p>Data: {trip.date}</p>
                <p>Duração: {trip.durationInDays} dias</p>
                <p>Descrição: {trip.description}</p>
                <button>Quero embarcar!</button>
              </CardContainer>
            );
          })}
        </GridMain>
    </ContainerMain>
  );
}
