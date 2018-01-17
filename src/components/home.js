import React from 'react';
import logo from '../images/FixedATPLogo.png';

class Home extends React.Component {
  render() {
    return (
      <div className="mainWrapper">
        <div className="page">
          <div className='title'>
            <span>A</span><span>T</span><span>P</span>
            <img className ="logo" src={logo} alt="Logo" />
          </div>
          <div className='subTitle'>
            OPTONS
          </div>
        </div>
      </div>
      )
    }
  }
export default Home;