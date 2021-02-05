import { React, useState, useEffect } from "react";
import { ContainerInputs } from "./styled";
import axios from "axios";
import { baseUrl, user } from "../parameters";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(`${baseUrl}/${user}/login`, body)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        history.push("/trips-details");
      })
      .catch((err) => {
        alert("Ops, é necessário preencher os campos para continuar");
        console.log(err);
      });
  };

  return (
    <ContainerInputs>
      <h2>Astronauta, faça o seu login para começar :)</h2>
      <input
        onChange={onChangeEmail}
        value={email}
        placeholder="e-mail*"
        required
      ></input>
      <div>
        <input
          onChange={onChangePassword}
          value={password}
          placeholder="senha*"
          type="password"
          required
        ></input>
      </div>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </ContainerInputs>
  );
}
