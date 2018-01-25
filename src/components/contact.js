import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import ReactRevealText from 'react-reveal-text';
import Placeholder from '../images/037-placeholder.png';
import AldanTroy from '../images/divisions/AldanTroy.png';
import Bernie from '../images/profilePictures/Bernie.jpg';
import Diversity from '../images/divisions/Diversity.png';
import GHG from '../images/divisions/GHG.png';
import GHGHealth from '../images/divisions/GHGHealth.png';
import JDTuttle from '../images/divisions/JDTuttle.png';
import large from '../images/divisions/large.png';
import Lerner from '../images/divisions/Lerner.png';
import Noor from '../images/divisions/Noor.png';
import noorAssociates from '../images/divisions/noorAssociates.png';
import noorHospitality from '../images/divisions/noorHospitality.png';
import NoorStaffing from '../images/divisions/NoorStaffing.png';
import SearchPoint from '../images/divisions/SearchPoint.png';
import small_menu from '../images/divisions/small_menu.png';
import StratResources from '../images/divisions/StratResoruces.png';
import temporaryAlt from '../images/divisions/temporaryAlt.png';
import temprService from '../images/divisions/tempService.png';
import theLegalGroup from '../images/divisions/theLegalGroup.png';
import Triangle from '../images/divisions/Triangle.png';


class Contact extends React.Component {
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
    }

    return (
      <div className="page">
        <div className='componentHeader'>
          <img className="topIcon" src={Placeholder} alt='img'/>
          <ReactRevealText show={this.state.show}>
            Contact
          </ReactRevealText>
        </div>
        <div className="pageText">
        <div className='profilePicture'>
          <NavLink href='https://www.linkedin.com/in/bernie-vogel-9b7b60/'> <img src={Bernie} alt='proflie' /> </NavLink>
        </div>
          <h3>
            <p> Managing Director: Bernie Vogel</p>
          </h3>
          <p>212-497-9533</p>
          <p> Email: <a href={'mailto:bernie@atpoptions.com'} style={letterSpacing}>bernie@atpoptions.com</a></p>
          <p> 622 3rd Avenue 7th floor, </p>
          <p> New York, NY 10017</p>
          <Container>
            <Row>
              <Col><img className='division' src={AldanTroy} alt='division logo' /></Col>
              <Col><img className='division' src={Diversity} alt='division logo' /></Col>
              <Col><img className='division' src={GHG} alt='division logo' /></Col>
              <Col><img className='division' src={GHGHealth} alt='division logo' /></Col>
              <Col><img className='division' src={JDTuttle} alt='division logo' /></Col>
              <Col><img className='division' src={NoorStaffing} alt='division logo' /></Col>
            </Row>
            <Row>
              <Col><img className='division' src={large} alt='division logo' /></Col>
              <Col><img className='division' src={Lerner} alt='division logo' /></Col>
              <Col><img className='division' src={Noor} alt='division logo' /></Col>
              <Col><img className='division' src={noorAssociates} alt='division logo' /></Col>
              <Col><img className='division' src={noorHospitality} alt='division logo' /></Col>
              <Col><img className='division' src={theLegalGroup} alt='division logo' /></Col>
            </Row>
            <Row>
              <Col><img className='division' src={SearchPoint} alt='division logo' /></Col>
              <Col><img className='division' src={small_menu} alt='division logo' /></Col>
              <Col><img className='division' src={StratResources} alt='division logo' /></Col>
              <Col><img className='division' src={temporaryAlt} alt='division logo' /></Col>
              <Col><img className='division' src={temprService} alt='division logo' /></Col>
              <Col><img className='division' src={Triangle} alt='division logo' /></Col>
            </Row>
          </Container>
        </div>
      </div>
      )
    }
  }
export default Contact;