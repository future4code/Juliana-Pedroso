import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from './Home';
import { baseUrl, axiosConfig } from "./parameters";
import {
  ContainerDetailMatch,
  PerfilePhotoDetail,
  ClearButton, BackButton
} from "./styled-components";

export default function Matches() {
  const [showPerfile, setShowPerfile] = useState([]);
  const [matches, setMatches] = useState([]);
  const [showPage, setShowPage] = useState('');


//   useEffect(() => {
//     getMatches();
//   }, [showPerfile]);

  console.log(matches)

  const getMatches = () => {
    axios
      .get(`${baseUrl}/${axiosConfig}/matches`)
      .then((response) => {
        console.log(response.data.matches);
        setMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearMatchs = () => {
    axios
      .put(`${baseUrl}/${axiosConfig}/clear`)
      .then((response) => {
        alert("Seus matches foram removidos com sucesso!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMatches();
  }, [showPerfile]);

  const changePage = () => {
    setShowPage(!showPage);
  };

  if(showPage) {
    return <Home />
} else if (showPage !==showPage) {
    return <Matches />
}

  return (
    <div>
      {matches.map((match) => {
        return (
          <ContainerDetailMatch>
            <PerfilePhotoDetail src={match.photo} />
            <p>{match.name}</p>
          </ContainerDetailMatch>
        );
      })}
      <ClearButton
        onClick={() => {
          if (
            window.confirm(
              "Tem certeza que deseja limpar a sua lista de matches?"
            )
          ) {
            clearMatchs(showPerfile.id);
          }
        }}
      >
        Limpar Matches
      </ClearButton>
      <BackButton onClick={changePage}>Voltar</BackButton>
    </div>
  );
}
