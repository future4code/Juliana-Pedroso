import React, { useState, useEffect } from "react";
import axios from "axios";
import Matches from "./Matches";
import { baseUrl, axiosConfig } from "./parameters";
import {
  PerfilePhoto,
  OptionsIcon,
  OptionsButton,
  ShowListButton,
  ClearButton
} from "./styled-components";
import IconLike from "../img/like-pink.png";
import IconRemove from "../img/remove.jpg";

export default function Home() {
  const [showPerfile, setShowPerfile] = useState([]);
  const [showPage, setShowPage] = useState(true);
  const [isMatch, setIsMatch] = useState("");
  const [answer, setAnswer] = useState(true);

  useEffect(() => {
    if (showPerfile == "") {
      getProfileToChoose();
    }
  });

  const changePage = () => {
    setShowPage(!showPage);
  };

  const getProfileToChoose = () => {
    axios
      .get(`${baseUrl}/${axiosConfig}/person`)
      .then((response) => {
        setShowPerfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const yesMatch = () => {
    const body = {
      id: showPerfile.id,
      choice: true,
    };
    axios
      .post(`${baseUrl}/${axiosConfig}/choose-person`, body)
      .then((response) => {
        setIsMatch(response.data.isMatch);
        setAnswer(true);
        alert("Uhuuu, você curtiu!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const noMatch = () => {
    const body = {
      id: showPerfile.id,
      choice: false,
    };
    axios
      .post(`${baseUrl}/${axiosConfig}/choose-person`, body)
      .then((response) => {
        setIsMatch(response.data.isMatch);
        setAnswer(false);
        alert("Que pena, você não curtiu :(");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearMatchs = () => {
      axios.put(`${baseUrl}/${axiosConfig}/clear`)
      .then((response) => {
        alert('Seus matches foram removidos com sucesso!')
      })
      .catch((error) => {
          console.log(error)
      })
  }

  return (
    <div>
      <PerfilePhoto src={showPerfile.photo} alt="Logo Astromatch" />
      <h3>
        {showPerfile.name}, {showPerfile.age} anos
      </h3>
      <p>{showPerfile.bio}</p>
      <div>
        <OptionsButton>
          <OptionsIcon
            onClick={() => noMatch(showPerfile.id)}
            src={IconRemove}
            alt="Ícone de remover"
          />
        </OptionsButton>
        <OptionsButton>
          <OptionsIcon
            onClick={() => yesMatch(showPerfile.id)}
            src={IconLike}
            alt="Ícone de like"
          />
        </OptionsButton>
        <div>
          {showPage ? null : <Matches />}
          <ShowListButton onClick={changePage}>Mostrar Matches</ShowListButton>
          <ClearButton onClick={() => {if(window.confirm("Tem certeza que deseja limpar a sua lista de matches?")) {clearMatchs(showPerfile.id)}}}>Limpar Matches</ClearButton>
        </div>
      </div>
    </div>
  );
}
