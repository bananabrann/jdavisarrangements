import React from "react";

class Dev extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: "someValue",
            songData: [],
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

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
        console.log(`e.currentTarget.value: ${e.currentTarget.value}\ne.target.value: ${e.target.value}`)
    }

    handleSubmit(e) {
        // alert("A name was submitted: " + this.state.value);
        console.log(`A name! ${this.state.value}`)
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h1>Welcome to dev/admin page</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p className="form-label-content">Name:</p>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }

    componentDidMount() {
        this.setState({ someKey: "otherValue" });
        this.getData();
    }
}

export default Dev;
