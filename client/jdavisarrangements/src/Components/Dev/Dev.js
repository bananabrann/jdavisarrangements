import React from 'react';

class Dev extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return(
      <div className="container">
        <h1>Welcome to dev/admin page</h1>
      </div>
    )
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Dev;
