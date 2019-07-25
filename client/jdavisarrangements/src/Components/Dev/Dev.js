import React from "react";

class Dev extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: "someValue",
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e) {
        alert("A name was submitted: " + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h1>Welcome to dev/admin page</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }

    componentDidMount() {
        this.setState({ someKey: "otherValue" });
    }
}

export default Dev;
