import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";
import { PerfilePhoto, OptionsIcon, OptionsButton } from "./styled-components";
import IconLike from '../img/like.png';
import IconRemove from '../img/remove.jpg'

export default function Home() {
  const [showPerfile, setShowPerfile] = useState([]);

  useEffect(() => {
    if (showPerfile == "") {
      getProfileToChoose();
    }
  });

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

  return (
    <div>
      <PerfilePhoto src={showPerfile.photo} />
      <p>{showPerfile.name}, {showPerfile.age} anos</p>
      <p>{showPerfile.bio}</p>
      <div>
        <OptionsButton><OptionsIcon src={IconLike} /></OptionsButton>
        <OptionsButton><OptionsIcon src={IconRemove} /></OptionsButton>
      </div>
    </div>
  );
}
