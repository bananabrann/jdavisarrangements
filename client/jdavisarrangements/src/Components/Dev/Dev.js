import React from "react";

class Dev extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: "someValue",
            songData: [],
            aboutData: [],
            value: ""
        };
        this.getData = this.getData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getData() {
        fetch("/dev")
        .then(response => response.json())
        .then(data => {
            console.log("inside getSongs()")
            this.setState({
                songData: data.siteData.songs,
                aboutData: data.siteData.aboutMe
            });
        });

    }

    handleChange(section, idx, e) {
        let newSongData = this.state.songData

        if (section === "title") {
            newSongData[idx].title = e.currentTarget.value
        } 
        if (section === "desc") {
            newSongData[idx].description= e.currentTarget.value
        }

        this.setState({
            songData: newSongData
        });

        console.table(this.state.songData)
    }

    handleSubmit(note, e) {
        console.log(`A name! ${this.state.value}`)
        e.preventDefault();
    }

    render() {
        const songData = this.state.songData;
        const aboutData = this.state.aboutData;
        // console.log(`Checking state... songData: ${this.state.songData}`)
        // console.log(this.state.songData)

        return (
            <div className="container">
                <h1>Welcome to dev/admin page</h1>
                <br />

                <section className="dev-edit-section" id="dev-edit-songs">
                    {songData.map((currSong, idx) => {
                        return(
                            <div key={currSong.id} className="dev-edit-individual-song">
                                <p>{currSong.title}</p>

                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                        <p className="form-label-content">Name:</p>
                                        <input type="text" value={currSong.title} onChange={(evt) => this.handleChange("title",idx, evt)} />
                                    </label>
                                    <input type="submit" value="Submit" />
                                </form>

                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                        <p>Description:</p>
                                        <input type="text" value={currSong.description} onChange={(evt) => this.handleChange("desc", idx, evt)} />
                                    </label>
                                    <input type="submit" value="Submit" />
                                </form>

                                <br />
                            </div>
                        )
                    })}


                </section>


            </div>
        );
    }

    componentDidMount() {
        this.setState({ someKey: "otherValue" });
        this.getData();
    }
}

export default Dev;
