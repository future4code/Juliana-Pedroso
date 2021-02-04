import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, user } from "../parameters";
import { ContainerText, CardTrips } from "./styled";
import { useHistory } from "react-router-dom";
import { goToCreateTripPage } from "../Routers/Coordinator";

export default function TripDetailsPage() {
  const [trip, setTrip] = useState([]);
  const [tripId, setTripId] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    }

    getTrip();
  }, []);

  const getTrip = () => {
    axios
      .get(`${baseUrl}/${user}/trips`)
      .then((res) => {
        setTrip(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerText>
      <h1>Página com os detalhes das viagens</h1>
      <CardTrips>
        {trip.map((trip) => {
          return (
            <div>
              <h2>{trip.name}</h2>
              <p>Planeta: {trip.planet}</p>
              <p>Descrição: {trip.description}</p>
              <button
                onClick={() => {
                  setTripId(trip.id);
                }}
              >
                Lista de candidatos
              </button>
            </div>
          );
        })}
      </CardTrips>
      <div>
        <button onClick={() => goToCreateTripPage(history)}>
          Criar nova viagem
        </button>
      </div>
    </ContainerText>
  );
}
