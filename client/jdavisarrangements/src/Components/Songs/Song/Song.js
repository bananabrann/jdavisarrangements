import React from "react";

class Song extends React.Component {
    constructor() {
        super();
        this.state = { someKey: "someValue" };
    }

    render() {
        return(
            <div>
                <p className="song-title">{this.props.title}</p>
                <p className="song-desc">{this.props.description}</p>
            </div>
        )
    }

    componentDidMount() {
        this.setState({ someKey: "otherValue" });
    }
}

export default Song;
