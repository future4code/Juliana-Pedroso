import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import { PokedexLogo } from "./components/styled-components";
import "./App.css";

export default function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    if (pokeList == "") {
      getAllPokemons();
    }
  });

  const getAllPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokeList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <div className="App">
      <PokedexLogo />
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard poke={pokeName} />}
    </div>
  );
}
