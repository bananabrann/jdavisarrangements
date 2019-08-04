import React, { Component } from 'react';
import { Link } from "react-router-dom";

const linkToHome="/";
const linkToAbout="/about";
const linkToSongs="/songs";
const linkToProducts="/products";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <div className="Nav-container">
        <p></p>
      </div>
    )
  }

  componentDidMount() {
    this.setState({ someKey: 'Navbar' });
  }
}

export default Nav;
