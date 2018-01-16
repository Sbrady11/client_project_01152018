import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="page">
        <h1> Contact </h1>
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