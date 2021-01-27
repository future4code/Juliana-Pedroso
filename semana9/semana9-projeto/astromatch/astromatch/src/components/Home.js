import React, { useState, useEffect } from "react";
import axios from "axios";
import Matches from "./Matches";
import { baseUrl, axiosConfig } from "./parameters";
import {
  PerfilePhoto,
  OptionsIcon,
  OptionsButton,
  ShowListButton,
} from "./styled-components";
import IconLike from "../img/like-pink.png";
import IconRemove from "../img/remove.jpg";

export default function Home() {
  const [showPerfile, setShowPerfile] = useState([]);
  const [showPage, setShowPage] = useState('');
//   const [isMatch, setIsMatch] = useState("");
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
        // setIsMatch(response.data.isMatch);
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
        setAnswer(false);
        alert("Que pena, você não curtiu :(");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  if(showPage) {
      return <Matches />
  } else if (showPage !==showPage) {
      return <Home />
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
          <ShowListButton onClick={changePage}>Mostrar Matches</ShowListButton>
        </div>
      </div>
    </div>
  );
}
