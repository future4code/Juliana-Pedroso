import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ContainerMain,
  ContainerFilter,
  CardContainer,
  GridMain,
} from "./styled";
import { baseUrl, user } from "../parameters";
import { useHistory } from "react-router-dom";
import { goToApplicationFormPage } from "../Routers/Coordinator";

export default function Main() {
  const [trips, setTrips] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputDate, setInputDate] = useState("");
  const history = useHistory();

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

  const onChangeFilterText = (e) => {
    setInputText(e.target.value);
  };

  const onChangeFilterDate = (e) => {
    setInputDate(e.target.value);
  };

  const filterList = () => {
    return trips
      .filter((trip) => {
        const title = trip.name.toLowerCase();
        return title.indexOf(inputText.toLowerCase()) > -1;
      })
  };

  return (
    <ContainerMain>
      <ContainerFilter>
        <div className="space stars1"></div>
        <p>Pesquisar viagens disponíveis</p>
        <label>Título da viagem</label>
        <input
          onChange={onChangeFilterText}
          value={inputText}
          className="search-title"
          placeholder="Busca por título"
          type="text"
        ></input>
        <div>
          <label>Data da viagem</label>
          <input
            onChange={onChangeFilterDate}
            value={inputDate}
            className="search-date"
            placeholder="Ex. xx/xx/xxxx"
            type="date"
          ></input>
        </div>
        
      </ContainerFilter>
      <GridMain>
        {filterList().map((trip) => {
          return (
            <CardContainer key={trip.id}>
              <h1>{trip.name}</h1>
              <p>Planeta: {trip.planet}</p>
              <p>Data: {trip.date}</p>
              <p>Duração: {trip.durationInDays} dias</p>
              <p>Descrição: {trip.description}</p>
              <button onClick={() => goToApplicationFormPage(history)}>
                Quero embarcar!
              </button>
            </CardContainer>
          );
        })}
      </GridMain>
    </ContainerMain>
  );
}
