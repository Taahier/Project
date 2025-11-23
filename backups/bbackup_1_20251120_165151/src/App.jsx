import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Services />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
