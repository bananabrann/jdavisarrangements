import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return(
      <h3>footer</h3>
    ) 
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Footer;
