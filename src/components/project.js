import React from 'react';
import ReactRevealText from 'react-reveal-text';
import Coding from '../images/037-coding.png';
import Medal from '../images/037-medal.png';

class Project extends React.Component {
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
          <img className="topIcon" src={Coding} alt='img'/>
          <ReactRevealText show={this.state.show}>
            Project Management and Staffing 
          </ReactRevealText>
        </div>
        <div className="pageText">
          <h2>In todays business world, leaders are more necessary than ever.</h2>
          <p>As projects increase in scale and scope, it becomes imperative to organize behind a unified design. ATP Options is able to provide your company with the experienced and capable project managers you need.</p>
          <p>At ATP Options, our primary concern is ensuring that our project managers are not only of the highest caliber, but are the right fit for your company and vision. We pride ourselves on our individualistic approach to each client, and will work with you to provide your project with the effective leadership it needs.</p>
          <h1> <img className="topIcon" src={Medal} alt='img'/></h1>
        </div>
      </div>
      )
    }
  }
export default Project;