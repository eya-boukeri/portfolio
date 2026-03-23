import React, { useState } from 'react';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Education  from './components/Education';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Skills     from './components/Skills';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div style={{ background: darkMode ? '#0d0d1a' : '#f8f9ff', color: darkMode ? '#fff' : '#111', minHeight: '100vh', transition: 'background 0.3s, color 0.3s' }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
