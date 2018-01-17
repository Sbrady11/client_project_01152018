import React from 'react';
import Logo from '../images/ATPLogo.png';
import Background from '../images/stock-photo-workers-working-on-network-graphic-overlay-whiteboard-649718950.jpg';

class Home extends React.Component {
  render() {
    return (
        <div className="homeSplash">
          <img className="background" src={Background} alt="Shutterstock Background 1"/>
          <img className="logo" src={Logo} alt="ATPOptions"/>
    </div>
      )
    }
  }
export default Home;