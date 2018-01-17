import React from 'react';
import logo from '../images/FixedATPLogo.png';
import ReactRevealText from 'react-reveal-text';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2500);
  }

  render() {
    return (
      <div className="mainWrapper">
        <div className="page">
          <div className='title'>
            <span>A</span><span>T</span><span>P</span>
            <img className ="logo" src={logo} alt="Logo" />
          </div>
          <div className='subTitle'>
            OPTIONS
          </div>
          <h1>
          <ReactRevealText show={this.state.show}>
            Full Service Staffing Firm
          </ReactRevealText>
          </h1>
        </div>
      </div>
      )
    }
  }
export default Home;