import React, { useState, useEffect } from "react";
import axios from "axios";
import { PokemonsImages } from './styled-components'

export default function PokeCard(props) {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        if (pokemon.name !== props.poke) {
          pegaPokemon(props);
          }
      })

    const pegaPokemon = () => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${props.poke}`)
          .then((response) => {
            setPokemon(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      return (
        <div>
          <p><strong>{props.poke.toUpperCase()}</strong></p>
          <p>{pokemon.weight} Kg</p>
          <i>{pokemon.types && <p>{pokemon.types[0].type.name}</p>}</i>
          {pokemon.sprites && (
            <PokemonsImages src={pokemon.sprites.front_default} alt={pokemon.name} />
          )}
        </div>
    )
  }
