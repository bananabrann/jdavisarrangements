import React from 'react';

class Songs extends React.Component {
  constructor() {
    super();
    this.state = { 
      someKey: "Songs",
      songs: []
     };
  }

  render() {
    return (
        <div className="container">

        </div>
      )
  }

  componentDidMount() {
    this.setState({ someKey: 'Songs' });
  }
}

export default Songs;
