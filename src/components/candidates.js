import React from 'react';
import ReactCountDownClock from 'react-countdown-clock';
import ReactRevealText from 'react-reveal-text';
import Avatar from '../images/037-avatar.png';

class Candidates extends React.Component {
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
    
    const letterSpacing = {
      letterSpacing: 0,
      fontSize: '2em'
    }
    return (
      <div className="page">
          <div className='componentHeader'>
            <img className="topIcon" src={Avatar} alt='img'/>
            <ReactRevealText show={this.state.show}>
              Candidates
            </ReactRevealText>
          </div>
        <div className="pageText">
          <div className="clockText">
            <ReactRevealText show={this.state.show}>
              Every 5 seconds, over 35,000 Coca-Cola products are consumed.
              Every 5 seconds, 205,000 Facebook posts are posted.
              Your resume is screened by a corporate recruiter in only 7.
            </ReactRevealText>
          </div>
            <ReactCountDownClock seconds ={7}
              color = 'orange'
              alpha={0.9}
              fontSize='auto'
              size={200}
            />
          <div className="candidateText">
          <p>
          Having been in the corporate world for multiple years, our staff consultants know how to help you market your resume to the role of your choice.
            </p>
            <p> 
              Secondly, an ally for you should be someone who is transparent about your skills, knows the industry you are in or has colleagues that have personally experienced it. Chances are no one recruiter can be all you have in obtaining the role or new career. We are in the business of aligning relations.
            </p>
            <p>
              <a href={"mailto:bernie@atpoptions.com"} style={letterSpacing}>Send</a>us, or email bernie@atpoptions.com, a copy of your resume now for a marketing assessment​ and a free in person interview consultation.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Candidates;