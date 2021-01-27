import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";
import { PerfilePhotoDetail } from './styled-components'

export default function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()}, [matches]);
  
  const getMatches = () => {
    axios
      .get(`${baseUrl}/${axiosConfig}/matches`)
      .then((response) => {
        console.log(response.data.matches)
        setMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        {matches.map((match) => {
            return (
                <div>
                    <PerfilePhotoDetail src={match.photo} />
                    <p>{match.name}</p>
                </div>
                
            )
        })}
    </div>
  );
}
