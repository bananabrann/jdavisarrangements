import React, { Component } from "react";
import { Route } from "react-router-dom";
import About from "../About/About";
import Audio from "../Audio/Audio";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import Products from "../Products/Products";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header>
          <h2>Here be the header</h2>
        </header>
        <nav>
          Here be the side nav bar

        </nav>

      </div>
    );
  }
}
export default App;
