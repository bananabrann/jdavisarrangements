import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: {}
        };
        this.getSong();
    }
    getSong() {
        fetch("/song")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    song: data
                });
            });
    }
    render() {
        return (
            <div className="App">
                <h1>{this.state.song.name}</h1>
                <p>{this.state.song.composer}</p>
            </div>
        );
    }
}
export default App;
