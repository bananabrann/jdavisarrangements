import React, { Component } from "react";
import { Route } from "react-router-dom";
import Dev from "../Dev/Dev";
import Home from "../Home/Home";
import Songs from "../Songs/Songs";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Products from "../Products/Products";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="App">
                <nav>
                    <Nav />
                </nav>

                <body>
                    <Route
                        path="/"
                        exact
                        component={Home}
                        render={routerProps => <Home />}
                    />
                    <Route
                        path="/dev"
                        exact
                        component={Dev}
                        render={routerProps => <Dev />}
                    />
                    <Route
                        path="/songs"
                        exact
                        component={Songs}
                        render={routerProps => <Songs />}
                    />
                    <Route
                        path="/about"
                        exact
                        component={About}
                        render={routerProps => <About />}
                    />
                    <Route
                        path="/products"
                        exact
                        component={Products}
                        render={routerProps => <Products />}
                    />
                </body>

                <footer>
                    <Footer />
                </footer>
                {/* <h1>{this.state.song.name}</h1>
                <p>{this.state.song.composer}</p> */}
            </div>
        );
    }
}
export default App;
