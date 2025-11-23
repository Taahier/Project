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
import { gsap } from 'gsap';
import { StaggeredMenu } from './components/animations/StaggeredMenu';

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
    // Disable Lenis on mobile devices to improve performance
    if (window.innerWidth < 768) return;

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

  const staggeredMenuItems = [
    { label: "Intro", link: "/#intro" },
    { label: "About Me", link: "/#about" },
    { label: "Skills", link: "/#skills" },
    { label: "Services", link: "/#services" },
    { label: "Projects", link: "/#projects" },
    { label: "Education", link: "/education" },
    { label: "Contact", link: "/#contact" },
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <SystemBoot onComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <>
          <StaggeredMenu
            items={staggeredMenuItems}
            socialItems={socialItems}
            menuButtonColor={theme === 'dark' ? '#fff' : '#000'}
            openMenuButtonColor="#000"
            accentColor="#ff4655"
            theme={theme}
            onToggleTheme={toggleTheme}
            isFixed={true}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300"
          >
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </motion.div>
        </>
      )}
    </Router>
  );
}

export default App;
