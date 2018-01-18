import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AnimatedRoutes from '../components/animatedRoutes';
import AboutUs from '../components/aboutUs.js';
import Employers from '../components/employers.js';
import Candidates from '../components/candidates.js';
import Home from '../components/home.js';
import Sales from '../components/sales.js';
import Reatained from '../components/retained.js';
import Project from '../components/project.js';
import Contact from '../components/contact.js';
import logo from '../images/FixedATPLogo.png';


/* webpage */
class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    const myStyle = {
      textDecoration: 'none'
    }

    return (
      <div className="App">
        <Router>
          <div>

            {/* Bootstrapped Nav */}

            <Navbar color="faded" light expand="md">
              <NavbarToggler onClick={this.toggle} />
              <NavbarBrand href="/"><img className ="subLogo" src={logo} alt="Logo" />ATP Options</NavbarBrand>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Navigation
                    </DropdownToggle>
                    <DropdownMenu >
                      <DropdownItem>
                        <NavItem>
                          <Link to="/about" style={myStyle} >About</Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <Link to="/employers" style={myStyle} >Employers</Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <Link to="/candidates" style={myStyle} >Candidates</Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <Link to="/sales" style={myStyle} >Services</Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <Link to="/retainedsearch" style={myStyle} >Retained Search</Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <Link to="/projectmanagement&staffingsolutions" style={myStyle} >Project Management and Staffing</Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <Link to="/contact" style={myStyle} >Contact</Link>
                        </NavItem>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Divisions
                      </DropdownToggle>
                      <DropdownMenu >
                        <DropdownItem>
                          Option 1
                        </DropdownItem>
                        <DropdownItem>
                          Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
            
            {/*Animated Route Controller*/}
            
            <AnimatedRoutes>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={AboutUs} />
              <Route path="/employers" exact component={Employers} />
              <Route path="/candidates" exact component={Candidates} />
              <Route path="/sales" exact component={Sales} />
              <Route path="/retainedsearch" exact component={Reatained} />
              <Route path="/projectmanagement&staffingsolutions" exact component={Project} />
              <Route path="/contact" exact component={Contact} />
            </AnimatedRoutes> 
          </div>
        </Router>
      </div>  
    );
  }
}

export default App;
