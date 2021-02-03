import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, user } from "../parameters";
import { ContainerText, CardTrips } from "./styled";
import { useHistory } from "react-router-dom";

export default function TripDetailsPage() {
  const [tripDetail, setTripDetail] = useState({});
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token === null) {
        history.push('/login')
    }

    getTripDetail();
  }, []);

  const getTripDetail = () => {
    axios
      .get(`${baseUrl}/${user}/trip/BOs3axCrgBaohRGx7Nuw`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setTripDetail(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerText>
      <h1>Página com os detalhes das viagens</h1>
      <CardTrips>
        <h2>{tripDetail.name}</h2>
        <p>Planeta: {tripDetail.planet}</p>
        <p>Descrição: {tripDetail.description}</p>
      </CardTrips>
    </ContainerText>
  );
}
