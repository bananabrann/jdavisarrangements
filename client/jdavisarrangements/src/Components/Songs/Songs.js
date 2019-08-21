import React from "react";
import Song from "./Song/Song";

class Songs extends React.Component {
    constructor() {
        console.log("constructor() called")
        super();
        this.state = {
            someKey: "Songs",
            data: []
        };
        this.getSongs = this.getSongs.bind(this)
    }

    getSongs() {
        console.log("getSongs() called")

        fetch("/songs")
            .then(response => response.json())
            .then(d => {
                console.log("inside getSongs()")
                console.log(d.siteData.songs)
                this.setState({
                    data: d.siteData.songs
                });
            });
    }

    render() {
        console.log("render() called")


        const songData = this.state.data

        return (
            <div className="songs-container">
                <h1>Songs Page</h1>
                <br />
                <section>
                    {songData.map((currSong, idx) => {
                        return(
                            <div key={currSong.id} className="song-container">
                                <p>id: {currSong.id}</p>
                                <Song
                                    title={currSong.title}
                                    description={currSong.description}
                                />
                                <br />
                            </div>
                        )
                    })}
                </section>
                {/* <p>{this.state.data}</p> */}
            </div>
        )
    }

    componentDidMount() {
        console.log("compoDidMount() called")
        this.getSongs()
        // console.log(this.state.data[1].title)
    }
}

export default Songs;
