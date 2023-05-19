import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import HeaderItem from './components/HeaderItem';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <React.Fragment className="App">
     <Nav/>
     <HeaderItem/>
     <Hero/>
     <Highlights/>
     <Testimonials/>
     <Main/>
     <Footer/>
    </React.Fragment>
  );
}

export default App;
