import React, { useState, useEffect } from "react";
import { ContainerList, CardTripsList } from "./styled";
import axios from "axios";

export default function ListTripsPage() {
  // const []

  return (
    <ContainerList>
      <h2>Página com a lista dos candidatos por viagem</h2>
      <CardTripsList>
        <p>teste1</p>
        <hr />
        <p>teste2</p>
        <hr />
        <p>teste3</p>
      </CardTripsList>
    </ContainerList>
  );
}
