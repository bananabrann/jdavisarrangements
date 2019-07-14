import React from 'react';

class Audio extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (<div>
        hey
    </div>);
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Audio;
