import React from 'react';
import { Container, CardDeck, CardImg, CardTitle, CardSubtitle, CardBody, Card } from 'reactstrap';
import { NavLink } from 'reactstrap';
import ReactRevealText from 'react-reveal-text';
import logo from '../images/ATPLogoClean.png';
import Handshake from '../images/037-handshake.png';
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
        <Container>         
          <CardDeck>
            <Card body className='text-center'>
              <CardTitle tag="h3">Candidates</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardImg top width='100%' src={Avatar} />
                <CardBody>
                  We are interested in finding the perfect fit for our clients, and that all starts with you.
                <NavLink href='/candidates'> more </NavLink>
              </CardBody>
            </Card>
            <Card body className='text-center'>
              <CardTitle tag="h3">About Us</CardTitle>
                <CardSubtitle></CardSubtitle>
              <CardImg top width='100%' src={Handshake} />
                <CardBody>
                  A full-service national staffing firm based in New York City,
                  we are taking our combined years of multiple industry experiences to have clients and associates benefit from working in a diverse and mature working relationship.
                  <NavLink href='/about'> more </NavLink>
                </CardBody>
            </Card>
            <Card body className='text-center'>
              <CardTitle tag="h3">Clients</CardTitle>
                <CardSubtitle></CardSubtitle>
              <CardImg top width='100%' src={Creativity} />
                  <CardBody>
                    At ATP we provide customized staffing solutions, talent acquisition solutions-project management, applicant tracking systems, and more.
                  <NavLink href='/sales'> more </NavLink>
                </CardBody>
            </Card>    
          </CardDeck>
        </Container>
        </div>
        <div className='signature'>
          <p>Copyright ATPOptions.info 2018. All Rights Reserved. Website by Simon Brady</p>
        </div>

      </div>
      )
    }
  }
export default Home;