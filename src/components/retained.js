import React from 'react';
import ReactRevealText from 'react-reveal-text';
import Briefcase from '../images/037-briefcase.png';
import GrowthImg from '../images/svg/037-growth.svg';
import Analytics from '../images/svg/009-analytics-2.svg';


class Retained extends React.Component {
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

    const imgStyle = {
    height: 200,
    width: 200,
    float: 'right',
    clear: 'left',
    position: 'relative',
    bottom: 300,
    right: 160
    }

    return (
      <div className="page">
        <h1> 
        <img className="topIcon" src={Briefcase} alt='img'/>
        <ReactRevealText show={this.state.show}>
          Retained Search 
        </ReactRevealText>
        </h1>
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
         </div>
         <img className ="buildingPic" src={GrowthImg} style={imgStyle} alt="GrowthImg" />
        </div>
      </div>
      )
    }
  }
export default Retained;