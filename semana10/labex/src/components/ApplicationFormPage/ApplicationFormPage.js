import React, { useState, useEffect } from "react";
import { ContainerForm } from "./styled";
import useForm from "../useForm";
import axios from "axios";
import { baseUrl, user } from "../parameters";
import { useHistory } from "react-router-dom";

export default function ApplicationFormPage() {
  const [form, onChangeForm, clearFields] = useForm({
    name: "",
    age: "",
    profession: "",
    country: "",
    trip: "",
    applicationText: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    clearFields();
    alert(
      "Olá, Astronauta! Sua inscrição foi recebida com sucesso! Aguarde nosso contato :)"
    );
    axios
      .post(`${baseUrl}/${user}/trips/BOs3axCrgBaohRGx7Nuw/apply`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerForm>
      <h2>Página de aplicação de formulário</h2>
      <h3>Astronauta, por favor preencha os campos abaixo:</h3>
      <form onSubmit={submitForm}>
        <input
          name="name"
          value={form.name}
          onChange={onChangeForm}
          placeholder="Nome*"
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 caracteres"}
          type="text"
        ></input>
        <input
          name="age"
          value={form.age}
          onChange={onChangeForm}
          placeholder="Idade*"
          required
          min="18"
          type="number"
        ></input>
        <input
          name="profession"
          value={form.profession}
          onChange={onChangeForm}
          placeholder="Profissão*"
          required
          pattern={"^.{10,}"}
          title={"A profissão deve ter no mínimo 10 caracteres"}
          type="text"
        ></input>
        <input
          name="country"
          value={form.country}
          onChange={onChangeForm}
          placeholder="País*"
          required
          pattern={"^.{4,}"}
          title={"A profissão deve ter no mínimo 4 caracteres"}
          type="text"
        ></input>
        <textarea
          name="applicationText"
          value={form.applicationText}
          onChange={onChangeForm}
          placeholder="Por que você gostaria de embarcar nessa viagem?*"
          rows="8"
          cols="80"
          required
          pattern={"^.{30,}"}
          title={"Sua resposta deve ter no mínimo 30 caracteres"}
          type="text"
        ></textarea>
        <div>
          <button>Candidatar-me!</button>
        </div>
      </form>
    </ContainerForm>
  );
}
