import React, { Component } from 'react';
// import { Grid, Nav, Navbar, NavItem } from '../node_modules/react-bootstrap';
import './App.css';
import './secondSection.css';
import './thirdSection.css';
import './fourthSection.css';
import './footer.css'

import Header from './header';
import SecondSection from './secondSection';
import ThirdSection from './thirdSection';
import FourthSection from './fourthSection';
import Footer from './footer';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
