import React from 'react';
import ReactRevealText from 'react-reveal-text';

class Acquisition extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

/* Animation timer for text*/

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
            Acquisition
          </ReactRevealText>
        </h1>
      </div>
      )
    }
  }
export default Acquisition;