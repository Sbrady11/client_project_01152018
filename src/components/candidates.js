import React from 'react';
import ReactCountDownClock from 'react-countdown-clock';

class Candidates extends React.Component {
  render() {
    return (
      <div className="page">
          <h1>
            Candidates
          </h1>
        <div className="pageText">
          <p>
            Did you know that the average speed your resume is screened by the corporate recruiter is 7 seconds or less?
          </p>
          <div className="clock">
            <ReactCountDownClock seconds ={7}
              color = 'orange'
              alpha={0.9}
              fontSize='auto'
              size={250}
            />
          </div>
          <p>
            Having been in the corporate world for multiple years, our staff consultants know how to help you market your resume to the role of your choice.
          </p>
          <p> 
            Secondly, an ally for you should be someone who is transparent about your skills, knows the industry you are in or has colleagues that have personally experienced it. Chances are no one recruiter can be all you have in obtaining the role or new career. We are in the business of aligning relations.
          </p>
        </div>
      </div>
    );
  }
}

export default Candidates;