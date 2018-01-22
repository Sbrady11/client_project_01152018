import React from 'react';
import ReactRevealText from 'react-reveal-text';
import Briefcase from '../images/037-briefcase.png';
import GrowthImg from '../images/svg/037-growth.svg';

class Retained extends React.Component {
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
          <img className="topIcon" src={Briefcase} alt='img'/>
          <ReactRevealText show={this.state.show}>
            Retained Search 
          </ReactRevealText>
        </div>
        <div className="page">
          <div className="pageText">
            <ul>
              <li>Healthcare</li>
              <li>Digital Marketing</li>
              <li>Information Technology</li>
              <li>Cyber Security</li>
              <li>Risk</li>
              <li>Legal Solutions</li>
              <li>C-Level Executives for Start Ups</li>
              <li>Blockchain</li>
              <li>Diversity</li>
              <li>Top Security Clearance</li>
              <li>Government</li>
            </ul>
            <h1>
              <img className ="topIcon" src={GrowthImg} alt="GrowthImg" />
            </h1>
          </div>
        </div>
      </div>
      )
    }
  }
export default Retained;