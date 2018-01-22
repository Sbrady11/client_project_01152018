import React from 'react';
import logo from '../images/FixedATPLogo.png';
import ReactRevealText from 'react-reveal-text';
import { Nav, NavLink } from 'reactstrap';

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
    padding: 50
    }

    return (
      <div className="mainWrapper">
        <div className="page">
          <div className='title'>
            <img className ="logo" src={logo} alt="Logo" />
            <ReactRevealText show={this.state.show} >
            ATP
            </ReactRevealText>
          </div>
          <h1>
          <ReactRevealText show={this.state.show}>
            OPTIONS
          </ReactRevealText>
            <NavLink href="/about" style = {linkStyling} >Enter</NavLink>
          </h1>
        </div>
        <Nav horizontal>
          <NavLink href='/about' style = {linkStyling}> Who We Are </NavLink>
          <NavLink href='/candidates' style = {linkStyling}> Candidates </NavLink>
          <NavLink href='/sales' style = {linkStyling}> Services </NavLink>
        </Nav>
      </div>
      )
    }
  }
export default Home;