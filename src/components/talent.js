import React from 'react';
import ReactRevealText from 'react-reveal-text';

class Talent extends React.Component {
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
            Talent
          </ReactRevealText> 
        </div>
      </div>
      )
    }
  }
export default Talent;