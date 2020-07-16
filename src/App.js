import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './components/HomePage';
import BootcampProjects from './components/BootcampProjects';
import MERNProjects from './components/MERNProjects';
import ContactPage from './components/ContactPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'William VanHook',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Initial Collection', path: '/bootcamp' },
        { title: 'React Collection', path: '/react' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Working Purposefully, Living Creatively',
        subTitle: 'My Bio:',
        subText: `I am a Front End Web Developer with a background in accounting and education, with a certificate in Full Stack Development from the University of North Carolina-Chapel Hill. 
        I am proficient in React, Node/Express, MongoDB, JavaScript and responsive web design.
        I am a methodical problem solver passionate about developing apps, with a focus on mobile-first design and development. 
        My degrees in accounting and history have prepared me to approach problems with focus and a team-first attitude.
         With each project, I aim to understand how to best engage users for an impactful user experience.`,
         email: 'wmvanhook@gmail.com'
        
      },
      bootcamp: {
        title: 'Collection',
        subTitle: 'Check out my initial collection below'
      },
      mern: {
        title: 'React Collection',
        subTitle: 'Check out my react projects below'
      },
      contact: {
        title: "Let's Connect",
        subText: 'If you like what you see on my site or have any questions, please feel free to reach out to me below. Thanks!'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Navbar sticky="top" className="border-bottom" bg="light" expand="lg">
            <Navbar.Brand>William VanHook</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/bootcamp">Collection</Link>
                <Link className="nav-link" to="/react">React Collection</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} subText={this.state.home.subText} />} />
            <Route path="/bootcamp" exact render={() => <BootcampProjects title={this.state.bootcamp.title} subTitle={this.state.bootcamp.subTitle} />} />
            <Route path="/react" exact render={() => <MERNProjects title={this.state.mern.title} subTitle={this.state.mern.subTitle} />} />
            <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subText={this.state.contact.subText} />} />
          </Switch>
          <Footer />

        </Container>
      </Router>
    );
  }

}

export default App;
