import React from 'react';
import ReactRevealText from 'react-reveal-text';
import Creativity from '../images/037-creativity.png';
import Road from '../images/svg/001-road.svg';
import Business from '../images/svg/002-business.svg';
import People from '../images/svg/003-people.svg';

class Sales extends React.Component {
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
            <img className="topIcon" src={Creativity} alt='img'/>
            <ReactRevealText show={this.state.show}>
              The ATP Options Difference
            </ReactRevealText>
          </div>
        <div className="pageText">
          <h2> Collaboration, Not Automation </h2>
          <p>
            It has become an industry trend to rely on Linked in and MSA’s to cut corners by completely automating the processes. ATP Options Depends on personal interactions and relationships to develop customized staffing and technology solutions to meet YOUR needs.
          </p>
          <img className="salesIcon" src={ People } alt='img' />
          <h2>
            Customized Staffing Solutions Exclusively:
          </h2>
          <ul className="salesList">
            <li>Retained Search</li>
            <li>On Demand Staffing</li>
            <li>Temporary Placement</li>
            <li>Permanent Placement</li>
            <li>Temp to Perm Placement</li>
            <li>Payroll Services for Start-Up</li>
          </ul>
          <img className="salesIcon" src={ Business } alt='img' />
          <h2>
            Talent acquisition Solutions-Project Management
          </h2>
          <ul className="salesList">
            <li>Consultation</li>
            <li>Blueprint</li>
            <li>Implementation</li>
            <li>Measurement</li>
          </ul>
          <img className="salesIcon" src={ Road } alt='img' />
          <h2>
            Applicant Tracking Systems
          </h2>
          <ul className="salesList">
            <li>Calibration</li>
            <li>Dashboard Development</li>
            <li>SWOT Analysis</li>
          </ul>
        </div>
      </div>
      )
    }
  }
export default Sales;