import React from 'react';
import ReactRevealText from 'react-reveal-text';
import Placeholder from '../images/037-placeholder.png';
import Building from '../images/037-building.png';

class Contact extends React.Component {
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
    const letterSpacing = {
      letterSpacing: 0,
      color: 'white'
    }

    return (
      <div className="page">
        <div className='componentHeader'>
          <img className="topIcon" src={Placeholder} alt='img'/>
          <ReactRevealText show={this.state.show}>
            Contact
          </ReactRevealText>
        </div>
        <div className="pageText">
          <h3>
            <p> Managing Director: Bernie Vogel</p>
          </h3>
          <p>212-497-9533</p>
          <p> Email: <a href={'mailto:$(this.props.email}'} style={letterSpacing}>bernie@atpoptions.com</a></p>
          <p> 622 3rd Avenue 7th floor, NY . NY 10017</p>
          <h1>
            <img className ="topIcon" src={Building} alt="building" />
          </h1>
        </div>
      </div>
      )
    }
  }
export default Contact;