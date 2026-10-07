import React, { useState, useEffect } from 'react';
import { info, navLinks } from '../data/portfolio';
import { FiMenu, FiX, FiArrowUpRight, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const s = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(9, 13, 22, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(148, 163, 184, 0.1)' : '1px solid transparent',
      transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.25)' : 'none',
    },
    nav: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 clamp(1.25rem, 4vw, 2.5rem)',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: '-0.02em',
      color: '#f8fafc',
    },
    logoBadge: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: 'rgba(37, 99, 235, 0.15)',
      border: '1px solid rgba(59, 130, 246, 0.3)',
      color: '#3b82f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14,
      fontWeight: 800,
    },

    link: (isActive) => ({
      padding: '8px 14px',
      borderRadius: 8,
      fontSize: 14,
      fontWeight: 500,
      color: isActive ? '#f8fafc' : '#94a3b8',
      background: isActive ? 'rgba(255, 255, 255, 0.06)' : 'transparent',
      transition: 'all 0.15s ease',
    }),
    ctaBtn: {
      padding: '9px 18px',
      borderRadius: 8,
      background: '#2563eb',
      color: '#ffffff',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.01em',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      transition: 'background 0.15s ease, transform 0.15s ease',
    },
    hamburgerBtn: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(148, 163, 184, 0.15)',
      color: '#f8fafc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
    },
    mobileDropdown: {
      background: 'rgba(9, 13, 22, 0.98)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(148, 163, 184, 0.12)',
      padding: '1.25rem clamp(1.25rem, 4vw, 2.5rem)',
      flexDirection: 'column',
      gap: 6,
    },
    mobileLink: (isActive) => ({
      padding: '12px 14px',
      borderRadius: 8,
      fontSize: 15,
      fontWeight: 500,
      color: isActive ? '#3b82f6' : '#cbd5e1',
      background: isActive ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }),
  };

  return (
    <header style={s.header}>
      <nav style={s.nav}>
        <a href="#home" style={s.logo}>
          <div style={s.logoBadge}>EB</div>
          <span>{info.prenom} {info.nom}</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-desktop-links">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={label}
                href={href}
                style={s.link(isActive)}
                onClick={() => setActive(id)}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#f8fafc';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#94a3b8';
                }}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="#contact"
            className="nav-cta-btn"
            style={s.ctaBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1d4ed8';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#2563eb';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <span>Contact</span>
            <FiArrowUpRight size={15} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="nav-hamburger-btn"
            style={s.hamburgerBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`nav-mobile-dropdown ${mobileMenuOpen ? 'open' : ''}`} style={s.mobileDropdown}>
        {navLinks.map(({ label, href }) => {
          const id = href.replace('#', '');
          const isActive = active === id;
          return (
            <a
              key={label}
              href={href}
              style={s.mobileLink(isActive)}
              onClick={() => {
                setActive(id);
                setMobileMenuOpen(false);
              }}
            >
              <span>{label}</span>
              <FiArrowUpRight size={14} color="#64748b" />
            </a>
          );
        })}
        <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
          <a
            href="#contact"
            style={{
              ...s.ctaBtn,
              width: '100%',
              justifyContent: 'center',
              padding: '12px',
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FiMail size={16} />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </header>
  );
}
