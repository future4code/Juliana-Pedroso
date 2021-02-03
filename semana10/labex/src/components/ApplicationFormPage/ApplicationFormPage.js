import React, { useState, useEffect } from "react";
import { ContainerForm } from "./styled";

export default function ApplicationFormPage() {
  return (
    <ContainerForm>
      <h2>Página de aplicação de formulário</h2>
      <input placeholder="Nome*" type="text" required></input>
      <input placeholder="Idade*" type="number" required></input>
      <input placeholder="Profissão*" type="text" required></input>
      <input placeholder="País*" type="text" required></input>
      <textarea
        placeholder="Por que você gostaria de embarcar nessa viagem?*"
        rows="8"
        cols="80"
      ></textarea>
      <div>
        <button onClick={()=> window.alert('Sua inscrição foi recebida! Aguarde nosso contato :)')}>Candidatar-me!</button>
      </div>
    </ContainerForm>
  );
}
