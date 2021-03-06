import React from 'react';
import ReactRevealText from 'react-reveal-text';

class Customized extends React.Component {
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
          <ReactRevealText show={this.state.show}>
            Customized 
          </ReactRevealText>    
        </div>
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