import React from 'react';
import logo from '../images/ATPLogoClean.png';
import ReactRevealText from 'react-reveal-text';
import { NavLink } from 'reactstrap';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import Handshake from '../images/037-handshake.png';
import Placeholder from '../images/037-placeholder.png';
import Creativity from '../images/037-creativity.png';
import Avatar from '../images/037-avatar.png';
import Example from '../components/example.js'

class Home extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }
  
/* Animation timer for text*/

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 200);
  }


  render() {
    const linkStyling = {
    padding: 20,
    textDecoration: 'none',
    color: 'white'
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
          <div className='navElement'>
            <NavLink href='/about' style = {linkStyling}> Who We Are </NavLink>
              <img className='topIcon' src={Handshake} alt='img'/>
          </div>
          <div className='navElement'>
            <NavLink href='/candidates' style = {linkStyling}> Candidates </NavLink>
              <img className='topIcon' src={Avatar} alt='img'/>
          </div>
          <div className='navElement'>
            <NavLink href='/sales' style = {linkStyling}> Services </NavLink>
              <img className='topIcon' src={Creativity} alt='img'/>
          </div>
          <div className='navElement'>
            <NavLink href='/contact' style = {linkStyling}> Contact </NavLink>
              <img className='topIcon' src={Placeholder} alt='img'/>
          </div>
        </div>
        <Example />
      </div>
      )
    }
  }
export default Home;