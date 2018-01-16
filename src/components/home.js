import React from 'react';
import Logo from '../images/ATPLogo.png';

class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <p>
          <img src ={Logo} alt="ATPOptions"/>
        </p>
      </div>
      )
    }
  }
export default Home;