import React from 'react';
import '../css/Home.css';
import Navbar from './Navbar'
import LandingMain from './LandingMain'
import CallNow from './CallNow'
import Why from './Why'
import Services from './Services'
import Feedback from './Feedback'
import CTA from './CTA'
import Footer from './Footer'
import ScrollTop from './ScrollTop'

function App() {
  return (
    <div className="App">
        <ScrollTop/>
        <Navbar/>
        <LandingMain/>
        <CallNow/>
        <Why/>
        <Services/>
        <Feedback/>
        <CTA/>
        <Footer/>
    </div>
  );
}

export default App;
