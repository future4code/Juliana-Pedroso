import React from 'react';
import axios from 'axios';
import { baseUrl, axiosConfig } from './parameters';
import { Paragraph } from './styled'

export default class DetailsPlaylistsPage extends React.Component {
    state = {
        tracks: [
            {
                "id": "ebfcd9be-ce55-44c7-a1d7-3ce9a2440cae",
                "name": "Is This Love",
                "artist": "Bob Marley",
                "url": "http://spoti4.future4.com.br/1.mp3"
            }
        ]
    }

    // getPlaylistTracks = () => {
    //     const body = {
    //         quantity: '',
    //         tracks: [],
    //         id: '',
    //         name: '',
    //         artist: '',
    //         url: ''
    //     }
    //   axios
    //   .get(`${baseUrl}/${id}/${tracks}`, body, axiosConfig)
    //   .then((response) => {
    //     this.setState({ tracks: response.data.result });
    //     console.log(response.data.result)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // }




    render(){
        const tracks = this.state.tracks.map((track) => {
            return(
                <div>
                    <p>Música: {track.name}</p>
                    <p>Artista: {track.artist}</p>
                </div>
                
                
            )
        })
        return(
            <Paragraph>{tracks}</Paragraph>
        )
    }

}
