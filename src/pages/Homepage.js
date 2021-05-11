import React from 'react';
import IntroBackground from '../components/IntroBackground';
import Intro from '../components/Intro';
import NavBar from '../components/NavBar';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Homepage() {
  return (
    <div>
      <NavBar />
      <IntroBackground />
      <Intro />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
