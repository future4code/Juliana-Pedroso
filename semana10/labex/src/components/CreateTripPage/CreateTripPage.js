import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { baseUrl, user } from "../parameters";
import { ContainerCreateTripForm } from "./styled";

export default function CreateTripPage() {
  const [form, setForm] = useState({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const history = useHistory();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  const createTrip = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      durationInDays: form.durationInDays,
      description: form.description,
    };

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    axios
      .post(`${baseUrl}/${user}/trips`, body, axiosConfig)
      .then((res) => {
        alert("Viagem criada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerCreateTripForm>
      {console.log(createTrip)}
      <h2>Página de criação de viagem</h2>
      <h3>Insira as informações para a próxima aventura!</h3>
      <form onSubmit={createTrip}>
        <input
          name="name"
          value={form.name}
          onChange={handleInputChange}
          placeholder="Título da viagem*"
          required
          pattern={"^.{5,}"}
          title={"O nome deve ter no mínimo 5 caracteres"}
          type="text"
        ></input>
        <select
          name="planet"
          id="planet"
          value={form.planet}
          onChange={handleInputChange}
          required
        >
          <option value="Select" selected>
            Selecione um planeta
          </option>
          <option value="Mercúrio">1 - Mercúrio</option>
          <option value="Vênus">2 - Vênus</option>
          <option value="Terra">3 - Terra</option>
          <option value="Marte">4 - Marte</option>
          <option value="Júpiter">5 - Júpiter</option>
          <option value="Saturno">6 - Saturno</option>
          <option value="Urano">7 - Urano</option>
          <option value="Netuno">8 - Netuno</option>
        </select>
        <input
          name="date"
          value={form.date}
          onChange={handleInputChange}
          placeholder="Data da viagem"
          required
          title={"Insira uma data no futuro"}
          pattern="^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{2}$"
          type="date"
        ></input>
        <input
          name="durationInDays"
          value={form.durationInDays}
          onChange={handleInputChange}
          placeholder="Duração da viagem (em dias)"
          min="50"
          type="number"
        ></input>
        <textarea
          name="description"
          value={form.description}
          onChange={handleInputChange}
          placeholder="Descrição sobre a viagem"
          rows="8"
          colums="80"
          pattern={"^.{30,}"}
          title={"Sua resposta deve ter no mínimo 30 caracteres"}
          type="text"
        ></textarea>
        <div>
          <button>Cadastrar</button>
        </div>
      </form>
    </ContainerCreateTripForm>
  );
}
