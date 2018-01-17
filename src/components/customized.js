import React from 'react';
import ReactRevealText from 'react-reveal-text';

class Customized extends React.Component {
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
          <ReactRevealText show={this.state.show}>
            Customized 
          </ReactRevealText>    
        </h1>
        <div className="pageText">
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
        </div>
      </div>
      )
    }
  }
export default Customized;