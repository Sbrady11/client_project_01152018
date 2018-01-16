import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AnimatedRoutes from '../components/animatedRoutes';
import AboutUs from '../components/aboutUs.js';
import Employers from '../components/employers.js';
import Candidates from '../components/candidates.js';
import Home from '../components/home.js';
import Sales from '../components/sales.js';
import Reatained from '../components/retained.js';
import Project from '../components/project.js';
import Contact from '../components/contact.js';

/* webpage */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="TopBar">
                <Link to="/">ATPOptions</Link>
                <Link to="/about">About</Link>
                <Link to="/employers">Employers</Link>
                <Link to="/candidates">Candidates</Link>
                <Link to="/sales">Sales</Link>
                <Link to="/retainedsearch">Reatained Search</Link>
                <Link to="/projectmanagement&staffingsolutions">Project Management and Staffing</Link>
                <Link to="/contact">Contact</Link>
            </div>
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
