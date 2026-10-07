import React from 'react';
import { info } from '../data/portfolio';
import { FiDownload, FiExternalLink, FiMail, FiMapPin, FiArrowRight, FiBriefcase } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

export default function Hero() {
  const photo = `${process.env.PUBLIC_URL}/profile.jpg`;

  const s = {
    section: {
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'clamp(84px, 12vh, 120px)',
      paddingBottom: 'clamp(3rem, 6vw, 5rem)',
      position: 'relative',
    },
    container: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 clamp(1.25rem, 4vw, 2.5rem)',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
      gap: 'clamp(2.5rem, 6vw, 4.5rem)',
      alignItems: 'center',
    },
    leftCol: {
      display: 'flex',
      flexDirection: 'column',
    },
    badgesRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
      marginBottom: 24,
    },

    schoolBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 14px',
      borderRadius: 'var(--radius-full)',
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(148, 163, 184, 0.18)',
      color: '#94a3b8',
      fontSize: 13,
      fontWeight: 500,
    },
    schoolDot: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#64748b',
    },
    greeting: {
      fontSize: 'clamp(1rem, 2vw, 1.15rem)',
      fontWeight: 600,
      color: '#94a3b8',
      marginBottom: 8,
      letterSpacing: '0.02em',
    },
    heading: {
      fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
      color: '#f8fafc',
      marginBottom: 16,
    },
    nameHighlight: {
      color: '#3b82f6',
    },
    roleTitle: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
      fontWeight: 600,
      color: '#cbd5e1',
      marginBottom: 18,
      lineHeight: 1.4,
    },
    description: {
      fontSize: 'clamp(14px, 2vw, 16px)',
      color: '#94a3b8',
      lineHeight: 1.75,
      maxWidth: 560,
      marginBottom: 32,
    },
    actionsRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
      marginBottom: 36,
    },
    primaryBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 24px',
      borderRadius: 'var(--radius-md)',
      background: '#2563eb',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#ffffff',
      fontSize: 14,
      fontWeight: 600,
      boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
      transition: 'background 0.15s ease, transform 0.15s ease',
    },
    secondaryBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 20px',
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255, 255, 255, 0.04)',
      border: '1px solid rgba(148, 163, 184, 0.2)',
      color: '#f8fafc',
      fontSize: 14,
      fontWeight: 600,
      transition: 'all 0.15s ease',
    },
    socialsRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      paddingTop: 20,
      borderTop: '1px solid rgba(148, 163, 184, 0.1)',
    },
    socialIconBtn: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255, 255, 255, 0.04)',
      border: '1px solid rgba(148, 163, 184, 0.15)',
      color: '#cbd5e1',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      transition: 'all 0.15s ease',
    },
    locationTag: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      color: '#64748b',
      marginLeft: 8,
    },
    rightCol: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    photoCard: {
      position: 'relative',
      width: '100%',
      maxWidth: 320,
      borderRadius: 'var(--radius-xl)',
      background: '#131929',
      border: '1px solid rgba(148, 163, 184, 0.16)',
      padding: 10,
      boxShadow: 'var(--shadow-lg)',
      transition: 'border-color 0.2s ease, transform 0.2s ease',
    },
    photoFrame: {
      width: '100%',
      aspectRatio: '4 / 5',
      borderRadius: 16,
      overflow: 'hidden',
      background: '#0d1322',
      position: 'relative',
    },
    photoImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
  };

  return (
    <section id="home" style={s.section}>
      <div style={s.container}>
        {/* Left Column: Bio & Calls to Action */}
        <div style={s.leftCol}>
          <div style={s.badgesRow}>
            <a href="#contact" className="pfe-badge-hero" title="Click to get in touch for PFE opportunities">
              <span className="pfe-sheen" />
              <span className="pfe-pulse-dot">
                <span className="pfe-ping-ring" />
                <span className="pfe-core-dot" />
              </span>
              <span style={{ color: '#ffffff', fontWeight: 700, fontSize: 13, letterSpacing: '-0.01em' }}>
                Available for PFE
              </span>
              <span style={{ color: 'rgba(148, 163, 184, 0.6)', fontSize: 12 }}>·</span>
              <span className="pfe-date-tag">
                Feb 2027
              </span>
            </a>
            <div style={s.schoolBadge}>
              <span style={s.schoolDot} />
              <span>3rd-Year Student @ ENIT</span>
            </div>
          </div>

          <p style={s.greeting}>Hello, I'm</p>
          <h1 style={s.heading}>
            {info.prenom} <span style={s.nameHighlight}>{info.nom}</span>
          </h1>

          <p style={s.roleTitle}>
            {info.role} · {info.institution}
          </p>

          <p style={s.description}>
            {info.description}
          </p>

          <div style={s.actionsRow}>
            <a
              href="#contact"
              style={s.primaryBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1d4ed8';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#2563eb';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <span>Get in Touch</span>
              <FiArrowRight size={16} />
            </a>

            <div style={{ display: 'inline-flex', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(148, 163, 184, 0.2)' }}>
              <a
                href={info.cvEnUrl}
                download="CV_Aya_Boukari_EN.pdf"
                style={{ ...s.secondaryBtn, border: 'none', borderRadius: 0, padding: '12px 16px' }}
                title="Download Official CV in English"
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'}
              >
                <FiDownload size={15} />
                <span>CV (EN)</span>
              </a>
              <a
                href={info.cvFrUrl}
                download="CV_Aya_Boukari_FR.pdf"
                style={{ ...s.secondaryBtn, border: 'none', borderLeft: '1px solid rgba(148, 163, 184, 0.2)', borderRadius: 0, padding: '12px 16px' }}
                title="Télécharger le CV officiel en Français"
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'}
              >
                <FiDownload size={15} />
                <span>CV (FR)</span>
              </a>
            </div>

            <a
              href={info.cvEnUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={s.secondaryBtn}
              title="Open CV in new tab"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              }}
            >
              <FiExternalLink size={15} />
              <span>Preview</span>
            </a>
          </div>

          <div style={s.socialsRow}>
            <a
              href={info.github}
              target="_blank"
              rel="noopener noreferrer"
              style={s.socialIconBtn}
              aria-label="GitHub Profile"
              title="GitHub"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f8fafc';
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.background = 'rgba(37, 99, 235, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#cbd5e1';
                e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.15)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              }}
            >
              <FaGithub size={18} />
            </a>

            <a
              href={info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={s.socialIconBtn}
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f8fafc';
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.background = 'rgba(37, 99, 235, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#cbd5e1';
                e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.15)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              }}
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href={`mailto:${info.email}`}
              style={s.socialIconBtn}
              aria-label="Email Address"
              title="Send an Email"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f8fafc';
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.background = 'rgba(37, 99, 235, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#cbd5e1';
                e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.15)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              }}
            >
              <FiMail size={18} />
            </a>

            <div style={s.locationTag}>
              <FiMapPin size={14} color="#3b82f6" />
              <span>{info.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Photo Card */}
        <div style={s.rightCol}>
          <div
            style={s.photoCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.35)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.16)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <div style={s.photoFrame}>
              <img src={photo} alt={`${info.prenom} ${info.nom}`} style={s.photoImg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
