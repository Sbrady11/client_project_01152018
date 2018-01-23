import React from 'react';
import { NavLink } from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import ReactRevealText from 'react-reveal-text';
import logo from '../images/ATPLogoClean.png';
import Handshake from '../images/037-handshake.png';
import Placeholder from '../images/037-placeholder.png';
import Creativity from '../images/037-creativity.png';
import Avatar from '../images/037-avatar.png';


class Home extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
/* Animation timer for text*/

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 200);
  }
  render() {
    const linkStyling = {
    padding: 15,
    textDecoration: 'none',
    color: 'black',
    fontSize: 18
    }
    return (
      <div className='mainWrapper'>
        <div className='page'>
          <div className='title'>
            <img className ='logo' src={logo} alt='Logo' />
            <ReactRevealText show={this.state.show} >
            ATP
            </ReactRevealText>
          </div>
          <div className='subtitle'>
            <h1>
            <ReactRevealText show={this.state.show}>
              OPTIONS
            </ReactRevealText>
            </h1>
          </div>
        </div>
        <div className='middleNav'>
        <Button color="secondary" onClick={this.toggle} style={{ margin: '1rem' }}>Click to Begin</Button>
          <div className='navElement'>
            <Collapse isOpen={this.state.collapse}>
            <NavLink href='/about' style = {linkStyling}> Who We Are </NavLink>
              <img className='navIcon' src={Handshake} alt='img'/>
              <Card>
                <CardBody>
                A full-service national staffing firm based in New York City,
                We are taking our combined years of multiple industry experiences to have clients and associates benefit from working in a diverse and mature working relationship.
                <NavLink href='/about'> more </NavLink>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className='navElement'>
            <Collapse isOpen={this.state.collapse}>
            <NavLink href='/candidates' style = {linkStyling}> Candidates </NavLink>
              <img className='navIcon' src={Avatar} alt='img'/>
              <Card>
                <CardBody>
                  We are interested in finding the perfect fit for our clients, and that all starts with you.
                <NavLink href='/candidates'> more </NavLink>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className='navElement'>
            <Collapse isOpen={this.state.collapse}>
            <NavLink href='/sales' style = {linkStyling}> Services </NavLink>
              <img className='navIcon' src={Creativity} alt='img'/>
              <Card>
                <CardBody>
                  At ATP we provide customized staffing solutions, talent acquisition solutions-project management, applicant tracking systems, and more.
                <NavLink href='/sales'> more </NavLink>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <div className='navElement'>
            <Collapse isOpen={this.state.collapse}>
              <NavLink href='/contact' style = {linkStyling}> Contact </NavLink>
              <img className='navIcon' src={Placeholder} alt='img'/>
              <Card>
                <CardBody>
                  Lets work together.
                <NavLink href='/contact'> more </NavLink>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </div>
        <div className='signature'>
          <p>Copyright ATPOptions.info 2018. All Rights Reserved. Website by Simon Brady</p>
        </div>

      </div>
      )
    }
  }
export default Home;