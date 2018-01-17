import React from 'react';
import ReactRevealText from 'react-reveal-text';

class Retained extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 100);
  }
  render() {
    return (
      <div className="page">
        <h1> 
        <ReactRevealText show={this.state.show}>
          Retained Search 
        </ReactRevealText>
        </h1>
      </div>
      )
    }
  }
export default Retained;