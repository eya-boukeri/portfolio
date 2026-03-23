import React, { useState, useEffect } from 'react';
import { info, navLinks } from '../data/portfolio';

export default function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const s = {
    nav: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2.5rem', height: 64,
      background: scrolled ? 'rgba(13,13,26,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    },
    logo: {
      fontSize: 20, fontWeight: 700, color: '#fff',
    },
    logoAccent: { color: '#7c3aed' },
    logoAccent2: { color: '#4f8ef7' },
    links: {
      display: 'flex', alignItems: 'center', gap: '0.25rem',
    },
    link: (isActive) => ({
      padding: '6px 14px', borderRadius: 8,
      fontSize: 14, fontWeight: 500,
      color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
      background: isActive ? 'rgba(124,58,237,0.2)' : 'transparent',
      border: isActive ? '1px solid rgba(124,58,237,0.4)' : '1px solid transparent',
      cursor: 'pointer', transition: 'all 0.2s',
    }),
    themeBtn: {
      width: 38, height: 38, borderRadius: 10,
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: '#fff', fontSize: 16,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', transition: 'all 0.2s', marginLeft: '1rem',
    },
  };

  return (
    <nav style={s.nav}>
      <div style={s.logo}>
        <span style={s.logoAccent}>{info.prenom} </span>
        <span style={s.logoAccent2}>{info.nom}</span>
      </div>
      <div style={s.links}>
        {navLinks.map(({ label, href }) => {
          const id = href.replace('#', '');
          return (
            <a
              key={label}
              href={href}
              style={s.link(active === id)}
              onClick={() => setActive(id)}
            >
              {label}
            </a>
          );
        })}
      </div>
      <button style={s.themeBtn} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀' : '🌙'}
      </button>
    </nav>
  );
}
