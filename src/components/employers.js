import React from 'react';
import ReactRevealText from 'react-reveal-text';
import Presentation from '../images/037-presentation.png';

class Employers extends React.Component {
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
        <h1>
          <img className="topIcon" src={Presentation} alt='img'/>
          <ReactRevealText show={this.state.show}>
            Employers
          </ReactRevealText>
        </h1>
        <div className="pageText">
          <p>
            Today, candidates are going to be at an advantage over employers for the first time in hiring history; as recent laws have been passed by the government that affects the hiring and decision making compensation practices.
          </p> 
            This will affect compensation practices, budgets, salaries, and limit your abilities to hire and compensate fairly across your current team. It may even waste your time from an interviewing standpoint.
          <h2>
            Why?
          </h2>
          <p>
            Human Resource Departments and all Staffing Agencies that are involved in representing candidates for your singular openings will not be allowed by law to ask a candidate their current compensation.
          </p>
          <p>
            ATP Options has the end to end staffing solutions /choices that will help you navigate through these challenging changes. Project Staffing will be the wave of the future just like Siri and cloud-based technology
          </p>
        </div>
      </div>
    );
  }
}

export default Employers;