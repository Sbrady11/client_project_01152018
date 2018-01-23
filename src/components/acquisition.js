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
        <div className='componentHeader'> 
          <ReactRevealText show={this.state.show}>
            Acquisition
          </ReactRevealText>
        </div>
      </div>
      )
    }
  }
export default Acquisition;