import React from 'react';
import ReactRevealText from 'react-reveal-text';
import Coding from '../images/037-coding.png';

class Project extends React.Component {

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
    return (
      <div className="page">
        <h1> 
          <img className="topIcon" src={Coding} alt='img'/>
          <ReactRevealText show={this.state.show}>
            Project Management and Staffing 
          </ReactRevealText>
        </h1>
        <div className="pageText">
          <p>Some Text</p>
        </div>
      </div>
      )
    }
  }
export default Project;