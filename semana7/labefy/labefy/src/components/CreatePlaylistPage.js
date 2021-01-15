import React from 'react';
import axios from 'axios';

export default class CreatePlaylistPage extends React.Component {
    state = {
        inputPlaylist: ''
    }

    handleInputPlaylist = (e) => {
        this.setState({ inputPlaylist: e.target.value })
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <input placeholder="digite o nome da playlist"
                onChange={this.handleInputPlaylist}
                value={this.state.inputPlaylist}></input>
                <button>Criar</button>
            </div>
        )
    }
}