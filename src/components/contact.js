import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="page">
        <h1> Contact </h1>
          <p> Managing director: Bernie Vogel 212-497-9533</p>
          <p> Email: <a href={'mailto:$(this.props.email}'}>bernie@atpoptions.com</a></p>
      </div>
      )
    }
  }
export default Contact;