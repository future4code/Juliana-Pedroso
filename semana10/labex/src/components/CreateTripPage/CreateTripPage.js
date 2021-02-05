import { React, useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, user } from "../parameters";
import { ContainerCreateTripForm } from "./styled";
import useForm from "../useForm";

export default function CreateTripPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const [form, onChangeForm, clearFields] = useForm({
    id: "",
    name: "",
    planet: "",
    date: "",
    durationInDays: "",
    description: "",
  });

  const createTripForm = (e) => {
    const body = {
      email: email,
      password: password

    };
    e.preventDefault();
    clearFields();
    axios
      .post(`${baseUrl}/${user}/trips`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Uhuuuu!! Viagem criada com sucesso!");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerCreateTripForm>
      <h2>Página de criação de viagem</h2>
      <h3>Insira as informações para a próxima aventura!</h3>
      <form onSubmit={createTripForm}>
        <input
          name="name"
          value={form.name}
          onChange={onChangeForm}
          placeholder="Título da viagem*"
          required
          pattern={"^.{5,}"}
          title={"O nome deve ter no mínimo 5 caracteres"}
          type="text"
        ></input>
        <select
          name="planet"
          id='planet'
          value={form.planet}
          onChange={onChangeForm}
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
          onChange={onChangeForm}
          placeholder="Data da viagem"
          required
          title={"Insira uma data no futuro"}
          type="date"
        ></input>
        <input
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChangeForm}
          placeholder="Duração da viagem (em dias)"
          min="50"
          type="number"
        ></input>
        <textarea
          name="description"
          value={form.description}
          onChange={onChangeForm}
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
