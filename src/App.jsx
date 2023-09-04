import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skills from './components/Skills/Skills';

const App = () => {


  const [activeLink, setActiveLink] = useState('/')

  const onUpdateActiveLink = (event) => {
    setActiveLink(event);
  };

  // 
  // 

  let storeTitle = document.title;

  let storeInterval1;
  let storeInterval2;

  window.addEventListener('blur', () => {

    storeInterval1 = setInterval(() => {
      document.title = `You've moved to other website😗`
    }, 1000);

    storeInterval2 = setInterval(() => {
      document.title = `Come here🙂`
    }, 1500);

  });


  window.addEventListener('focus', () => {

    clearInterval(storeInterval1);
    clearInterval(storeInterval2);
    document.title = storeTitle;

  })


  return (
    <>
      <Navbar activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
    </>
  )
}

export default App
