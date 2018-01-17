import React from 'react';
import ReactRevealText from 'react-reveal-text';

class Contact extends React.Component {
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
            Contact
          </ReactRevealText>
        </h1>
        <div className="pageText">
          <p> Managing Director: Bernie Vogel
          </p><p>212-497-9533</p>
          <p> Email: <a href={'mailto:$(this.props.email}'}>bernie@atpoptions.com</a></p>
          <p> 622 3rd Avenue 7th floor, NY . NY 10017</p>
        </div>
      </div>
      )
    }
  }
export default Contact;