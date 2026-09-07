// App.js
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default App;