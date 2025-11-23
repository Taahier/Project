import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Education from './components/Education';
import Lenis from 'lenis';
import SystemBoot from './components/animations/SystemBoot';
import GrainOverlay from './components/animations/GrainOverlay';

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Certifications />
    <Projects />
    <Services />
    <Contact />
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

  // Smooth Scrolling with Lenis - Agency Level (Heavy AF)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.2,
      smoothTouch: false,
      touchMultiplier: 1.2,
      infinite: false,
      lerp: 0.05,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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

  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <SystemBoot onComplete={() => setIsLoading(false)} />
      <GrainOverlay />
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300"
        >
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
        </motion.div>
      )}
    </Router>
  );
}

export default App;
