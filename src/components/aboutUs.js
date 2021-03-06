import React from 'react';
import ReactRevealText from 'react-reveal-text';
import Building from '../images/037-building.png';
import Handshake from '../images/037-handshake.png';
import Presentation from '../images/037-presentation-1.png';
import Key from '../images/037-key.png';

class AboutUs extends React.Component {
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
          <img className="topIcon" src={Handshake} alt='img'/>
          <ReactRevealText show={this.state.show}>
              About Us
          </ReactRevealText>
        </div>
        <div className="pageText">
          <h3>ATP Options</h3>
          <p> - A full-service national staffing firm based in New York City with offices in Texas, Chicago, Florida, California etc. Our broad-based staffing solutions range from project staffing services (hiring a team or a division full time or consultants) to long-term on-site recruiting, temporary hiring on exclusive or contingency basis and full-time traditional recruitment. We use cloud-based resources and AI technology to create personal and effective advantages in the market.
          </p>
          <h1>
            <img className="topIcon" src={Building} alt='building graphic' />
          </h1>
          <p>
            We are taking our combined years of multiple industry experiences to have clients and associates benefit from working in a diverse and mature working relationship. Our position in the market is to continually invest and sustain our position as market leaders and innovators through 1st link resources only.
          </p>
          <p>
            At ATP we understand that every organization is unique and our management professionals will partner with you to understand the genetic veins of your organization, from the temperature of your organization to the cultural hierarchies in every area. Adding value to your organization is our top priority.
          </p>
          <h1>
            <img className="topIcon" src={Presentation} alt='graphic' />
          </h1>
          <p>
            From our name, you can be comfortable knowing that we are not confined to a cookie cutter approach and will create flexible and tailored options to provide exactly what you need to grow your talent pool.
          </p>
          <p>
            If you are a startup we welcome the opportunity to partner with you pre-funding, if you are an entrepreneur with a vision we can provide payroll and talent solutions and if you are a mid-size firm we can create synergies for your firm organic growth or write RFP’s and SOW’s to help global firms undertake serious priorities while waiting for a budget to emerge.
          </p>
          <h1>
            <img className="topIcon" src={Key} alt='graphic' />
          </h1>
          <p>
            The foundation of an organization’s success is not only strategic in its leadership but also in the people, resources, and capabilities. ATP Options works beyond helping clients attract the right talent our services create a dynamic market environment that will define the glassdoor myths and brand your firm.
          </p>
          <p>
            Every Management consultant that you partner with on our team will know the difference between the culture in Boston, to the nuances in Midtown, to the calm demeanor in the South, to the culture across the pond and have been recruiting since Y2k. All of MC’s have spent a significant amount of time in the industry that you are conducting business in. This gives you the advantage of having a resourceful expert to offer insight, subject matter knowledge, and professional intuition for considering talent decisions to hire, pipeline or reject.
          </p>
          <p>
            ATP Options and its division affiliates are largely integrated with a multitude of industries and have personal relationships with our competitors and yours to help ascertain the market and its pulse.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;