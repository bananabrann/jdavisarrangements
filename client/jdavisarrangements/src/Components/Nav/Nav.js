import React, { Component } from "react";
import { Link } from "react-router-dom";

const linkToHome = "/";
const linkToAbout = "/about";
const linkToSongs = "/songs";
const linkToProducts = "/products";

class Nav extends React.Component {
    constructor() {
        super();
        this.state = { someKey: "someValue" };
    }

    render() {
        return (
            <div className="Nav-container">
                <nav>
                    <Link to={linkToHome}><div className="nav-item">Home</div></Link>
                    <Link to={linkToAbout}><div className="nav-item">About</div></Link>
                    <Link to={linkToProducts}><div className="nav-item">Services(prod.)</div></Link>
                    <Link to={linkToSongs}><div className="nav-item">Songs</div></Link>
                </nav>
            </div>
        );
    }

    componentDidMount() {
        this.setState({ someKey: "Navbar" });
    }
}

export default Nav;
