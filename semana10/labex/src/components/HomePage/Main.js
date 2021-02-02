import axios from "axios";
import React, { useEffect, useState } from "react";
import { ContainerMain, ContainerFilter } from "./styled";
import { baseUrl, user } from '../parameters';

export default function Main() {
  const [trips, setTrips] = useState({})

  useEffect(() => {
    axios.get(`${baseUrl}/${user}/trips`)
    .then((res) => {
      setTrips(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

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
        <div className='grid-trips'>
          <p>{trips.name}</p>
          <p>{trips.planet}</p>
          <p>{trips.durationInDays}</p>
          <p>{trips.date}</p>
          <p>{trips.description}</p>
        </div>
    </ContainerMain>
  );
}
