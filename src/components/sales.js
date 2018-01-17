import React from 'react';
import ReactRevealText from 'react-reveal-text';
import Creativity from '../images/037-creativity.png';

class Sales extends React.Component {
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
            <img className="topIcon" src={Creativity} alt='img'/>
            <ReactRevealText show={this.state.show}>
              The ATP Options Difference
            </ReactRevealText>
          </h1>
        <div className="pageText">
          <h2> Collaboration, Not Automation </h2>
          <p>
            It has become an industry trend to rely on Linked in and MSA’s to cut corners by completely automating the processes. ATP Options Depends on personal interactions and relationships to develop customized staffing and technology solutions to meet YOUR needs.
          </p>
          <p>
            Customized Staffing Solutions Exclusively:
          </p>
          <ul>
            <li>Retained Search</li>
            <li>On Demand Staffing</li>
            <li>Temporary Placement</li>
            <li>Permanent Placement</li>
            <li>Temp to Perm Placement</li>
            <li>Payroll Services for Start-Up</li>
          </ul>
          <p>
            Talent acquisition Solutions-Project Management
          </p>
          <ul>
            <li>Consultation</li>
            <li>Blueprint</li>
            <li>Implementation</li>
            <li>Measurement</li>
          </ul>
          <p>
            Applicant Tracking Systems
          </p>
          <ul>
            <li>Calibration</li>
            <li>Dashboard Development</li>
            <li>SWOT Analysis</li>
          </ul>
          <p>
            acquisition of Staffing Companies
          </p>
        </div>
      </div>
      )
    }
  }
export default Sales;