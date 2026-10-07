import React from 'react';
import { info } from '../data/portfolio';
import { FiArrowUp, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const s = {
    footer: {
      background: 'var(--bg-secondary)',
      borderTop: '1px solid rgba(148, 163, 184, 0.1)',
      padding: '2.5rem clamp(1.25rem, 4vw, 2.5rem)',
    },
    container: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 20,
    },
    brandBlock: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    },
    brandName: {
      fontSize: 16,
      fontWeight: 700,
      color: '#f8fafc',
    },
    brandRole: {
      fontSize: 13,
      color: '#94a3b8',
    },
    socialLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
    },
    socialBtn: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(255, 255, 255, 0.04)',
      border: '1px solid rgba(148, 163, 184, 0.15)',
      color: '#cbd5e1',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 15,
      transition: 'all 0.15s ease',
    },
    backToTopBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      fontWeight: 600,
      color: '#94a3b8',
      padding: '8px 14px',
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(255, 255, 255, 0.04)',
      border: '1px solid rgba(148, 163, 184, 0.12)',
      cursor: 'pointer',
      transition: 'all 0.15s ease',
    },
    copyright: {
      width: '100%',
      paddingTop: 20,
      marginTop: 20,
      borderTop: '1px solid rgba(148, 163, 184, 0.08)',
      textAlign: 'center',
      fontSize: 12,
      color: '#64748b',
    },
  };

  return (
    <footer style={s.footer}>
      <div style={s.container}>
        <div style={s.brandBlock}>
          <p style={s.brandName}>{info.prenom} {info.nom}</p>
          <p style={s.brandRole}>Software Engineering · ENIT, Tunisia</p>
        </div>

        <div style={s.socialLinks}>
          <a
            href={info.github}
            target="_blank"
            rel="noopener noreferrer"
            style={s.socialBtn}
            aria-label="GitHub"
            title="GitHub"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#f8fafc';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#cbd5e1';
              e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.15)';
            }}
          >
            <FaGithub size={16} />
          </a>

          <a
            href={info.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={s.socialBtn}
            aria-label="LinkedIn"
            title="LinkedIn"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#f8fafc';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#cbd5e1';
              e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.15)';
            }}
          >
            <FaLinkedinIn size={16} />
          </a>

          <a
            href={`mailto:${info.email}`}
            style={s.socialBtn}
            aria-label="Email"
            title="Email"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#f8fafc';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#cbd5e1';
              e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.15)';
            }}
          >
            <FiMail size={16} />
          </a>

          <button
            onClick={scrollToTop}
            style={s.backToTopBtn}
            aria-label="Back to Top"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#f8fafc';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.12)';
            }}
          >
            <FiArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>

        <div style={s.copyright}>
          © {new Date().getFullYear()} {info.prenom} {info.nom}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
