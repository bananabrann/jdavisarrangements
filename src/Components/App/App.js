import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import About from "../About/About";
import Audio from "../Audio/Audio";
import Home from "../Home/Home";
import Products from "../Products/Products";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi!</h1>
        <button>Hello</button>
      </header>
    </div>
  );
}

export default App;
