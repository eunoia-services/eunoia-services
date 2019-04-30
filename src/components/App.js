import React from 'react';
import '../css/App.css';
import Navbar from './Navbar'
import LandingMain from './LandingMain'
import AboutUs from './AboutUs'
import Services from './Services'
import Feedback from './Feedback'
import CTA from './CTA'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingMain/>
      <AboutUs/>
      <Services/>
      <Feedback/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
