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
          <Header />
        </header>

        <main>
          <nav>
            <Nav />
          </nav>
          <body>
            <Route path="/" exact component={Home} render={routerProps => <Home />} />
            <Route path="/about" exact component={About} render={routerProps => <About></About>} />
            <Route path="/audio" exact component={Audio} render={routerProps => <Audio></Audio>} />
            <Route path="/products" exact component={Products} render={routerProps => <Products></Products>} />

          </body>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default App;
