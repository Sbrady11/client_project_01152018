import React from 'react';
import ReactRevealText from 'react-reveal-text';
import Placeholder from '../images/037-placeholder.png';
import Building from '../images/037-building.png';

class Contact extends React.Component {
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
    const letterSpacing = {
      letterSpacing: 0,
      color: 'white'
    }

    const imgStyle = {
      height: 120,
      width: 120,
      float: 'right',
      clear: 'left',
      position: 'relative',
      bottom: 150,
      right: 160
    }
    return (
      <div className="page">
        <h1>
        <img className="topIcon" src={Placeholder} alt='img'/>
          <ReactRevealText show={this.state.show}>
            Contact
          </ReactRevealText>
        </h1>
        <div className="pageText">
          <h3>
            <p> Managing Director: Bernie Vogel</p>
          </h3>
          <p>212-497-9533</p>
          <p> Email: <a href={'mailto:$(this.props.email}'} style={letterSpacing}>bernie@atpoptions.com</a></p>
          <p> 622 3rd Avenue 7th floor, NY . NY 10017</p>
          <img className ="buildingPic" src={Building} style={imgStyle} alt="building" />
        </div>
      </div>
      )
    }
  }
export default Contact;