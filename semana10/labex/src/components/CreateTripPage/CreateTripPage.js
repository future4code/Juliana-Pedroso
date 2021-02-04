import { React, useState, useEffect } from "react";
import { ContainerCreateTripForm } from "./styled";

export default function CreateTripPage() {
  return (
    <ContainerCreateTripForm>
      <h2>Página de criação de viagem</h2>
      <input placeholder="id" type="text"></input>
      <input placeholder="Título da viagem" type="text"></input>
      <input placeholder="Planeta" type="text"></input>
      <input placeholder="Data da viagem" type="date"></input>
      <input placeholder="Duração da viagem (em dias)" type="number"></input>
      <textarea
        placeholder="Descrição sobre a viagem"
        rows="9"
        colums="30"
      ></textarea>
      <div>
        <button>Cadastrar</button>
      </div>
    </ContainerCreateTripForm>
  );
}
