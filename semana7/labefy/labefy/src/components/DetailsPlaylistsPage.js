import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";
import { TextDetails, Separator, PlayMusic } from "./styled";

export default class DetailsPlaylistsPage extends React.Component {
  state = {
    tracks: [
      {
        id: "2a12b9ac-7f6d-44c2-acc6-5e8cbf0e6231",
        name: "Canção Infantil",
        artist: "Cesar Mc",
        url: "http://spoti4.future4.com.br/1.mp3",
      },
      {
        id: "ee8d063f-7a71-4bd1-b041-61ea5eb30493",
        name: "Como os Nossos Pais",
        artist: "Elis Regina",
        url: "http://spoti4.future4.com.br/2.mp3",
      },
    ]
  };

  componentDidMount = () => {
    this.showDetailsPlaylist();
  };

  showDetailsPlaylist = (id) => {
    const body = {
      id: this.state.id,
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };
    axios
      .get(`${baseUrl}/${id}/tracks`, body, axiosConfig)
      .then((response) => {
        this.state({ tracks: response.data.result.tracks})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.tracks.map((track) => {
          return (
            <div>
              <TextDetails>
                <strong>>> Música: </strong>
                {track.name}
              </TextDetails>
              <TextDetails>
                <strong>>> Artista: </strong>
                {track.artist}
              </TextDetails>
              <PlayMusic>
                <audio controls="controls">
                  <source src={track.url} type="audio/mpeg" />
                </audio>
              </PlayMusic>

              <Separator />
              {this.showDetailsPlaylist(track.id)}
            </div>
          );
        })}
      </div>
    );
  }
}
