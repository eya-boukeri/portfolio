import React, { useState, useEffect } from 'react';
import { info, navLinks } from '../data/portfolio';

export default function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const s = {
    nav: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: 'clamp(0.5rem, 2%, 2.5rem)', height: 'auto',
      minHeight: 64,
      background: scrolled ? 'rgba(13,13,26,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      flexWrap: 'wrap',
    },
    logo: {
      fontSize: 'clamp(16px, 3vw, 20px)', fontWeight: 700, color: '#fff',
      minWidth: 0,
    },
    logoAccent: { color: '#7c3aed' },
    logoAccent2: { color: '#4f8ef7' },
    rightSection: {
      display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem, 2%, 1rem)',
    },
    links: {
      display: 'flex', alignItems: 'center', gap: 'clamp(0.25rem, 1%, 0.25rem)',
      '@media (max-width: 768px)': { display: 'none' },
    },
    link: (isActive) => ({
      padding: 'clamp(6px, 1%, 14px)', borderRadius: 8,
      fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 500,
      color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
      background: isActive ? 'rgba(124,58,237,0.2)' : 'transparent',
      border: isActive ? '1px solid rgba(124,58,237,0.4)' : '1px solid transparent',
      cursor: 'pointer', transition: 'all 0.2s',
      whiteSpace: 'nowrap',
    }),
    themeBtn: {
      width: 38, height: 38, borderRadius: 10,
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: '#fff', fontSize: 16,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', transition: 'all 0.2s',
      flexShrink: 0,
    },
    hamburger: {
      display: 'none',
      flexDirection: 'column', gap: 5,
      cursor: 'pointer',
      flexShrink: 0,
      '@media (max-width: 768px)': { display: 'flex' },
    },
    hamburgerLine: {
      width: 24, height: 2,
      background: '#fff',
      borderRadius: 1,
      transition: 'all 0.3s ease',
    },
    mobileMenu: {
      display: 'none',
      position: 'absolute', top: 64, left: 0, right: 0,
      background: 'rgba(13,13,26,0.98)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      flexDirection: 'column', gap: 0,
      padding: '1rem 0',
      '@media (max-width: 768px)': { display: mobileMenuOpen ? 'flex' : 'none' },
    },
    mobileLink: (isActive) => ({
      padding: '12px clamp(1rem, 4%, 2.5rem)',
      fontSize: '14px', fontWeight: 500,
      color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
      background: isActive ? 'rgba(124,58,237,0.15)' : 'transparent',
      borderLeft: isActive ? '3px solid #7c3aed' : '3px solid transparent',
      cursor: 'pointer',
      transition: 'all 0.2s',
      textAlign: 'left',
      width: '100%',
      boxSizing: 'border-box',
    }),
  };

  return (
    <nav style={s.nav}>
      <div style={s.logo}>
        <span style={s.logoAccent}>{info.prenom} </span>
        <span style={s.logoAccent2}>{info.nom}</span>
      </div>
      <div style={s.rightSection}>
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
        <button
          style={s.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <div style={{...s.hamburgerLine, transform: mobileMenuOpen ? 'rotate(45deg) translateY(11px)' : 'rotate(0)'}} />
          <div style={{...s.hamburgerLine, opacity: mobileMenuOpen ? 0 : 1}} />
          <div style={{...s.hamburgerLine, transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-11px)' : 'rotate(0)'}} />
        </button>
      </div>
      
      {/* MOBILE MENU */}
      <div style={s.mobileMenu}>
        {navLinks.map(({ label, href }) => {
          const id = href.replace('#', '');
          return (
            <a
              key={label}
              href={href}
              style={s.mobileLink(active === id)}
              onClick={() => {
                setActive(id);
                setMobileMenuOpen(false);
              }}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
