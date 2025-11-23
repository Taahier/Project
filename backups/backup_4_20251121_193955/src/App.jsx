import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import CustomCursor from './components/animations/CustomCursor';
import ScrollReveal from './components/animations/ScrollReveal';

const Home = () => (
  <>
    <Hero />
    <ScrollReveal>
      <About />
    </ScrollReveal>
    <ScrollReveal>
      <Skills />
    </ScrollReveal>
    <ScrollReveal>
      <Projects />
    </ScrollReveal>
    <ScrollReveal>
      <Services />
    </ScrollReveal>
    <ScrollReveal>
      <Contact />
    </ScrollReveal>
  </>
);

import CardNav from './components/animations/CardNav';
import logo from '/vite.svg'; // Placeholder logo

function App() {

  // Theme State
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const items = [
    {
      label: "Identity",
      bgColor: "#0f172a", // Slate 900
      textColor: "#fff",
      links: [
        { label: "Intro", ariaLabel: "Introduction", href: "/#intro" },
        { label: "About Me", ariaLabel: "About Me", href: "/#about" }
      ]
    },
    {
      label: "Arsenal",
      bgColor: "#b91c1c", // Red 700
      textColor: "#fff",
      links: [
        { label: "Skills", ariaLabel: "My Skills", href: "/#skills" },
        { label: "Services", ariaLabel: "What I Offer", href: "/#services" }
      ]
    },
    {
      label: "Mission",
      bgColor: "#000000",
      textColor: "#fff",
      links: [
        { label: "Projects", ariaLabel: "My Projects", href: "/#projects" },
        { label: "Education", ariaLabel: "Education History", href: "/education" }
      ]
    }
  ];

  return (
    <Router>
      <div className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
        {/* Custom Crosshair Cursor */}
        <CustomCursor />

        {/* <Navbar /> */}
        <CardNav
          logo={logo}
          logoAlt="Taahier Logo"
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#ff4655" // Valorant Red
          buttonTextColor="#fff"
          primaryButtonText="Connect !"
          primaryButtonLink="/#contact"
          ease="power3.out"
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
