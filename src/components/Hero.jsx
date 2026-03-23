import React from 'react';
import { info } from '../data/portfolio';

export default function Hero() {
  const photo = '/profile.jpg';

  const s = {
    section: {
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '0 2.5rem',
      paddingTop: 80,
      maxWidth: 1200, margin: '0 auto',
      gap: '4rem',
    },
    left: { flex: 1, animation: 'fadeUp 0.7s ease both' },
    badges: { display: 'flex', gap: 10, marginBottom: 28, flexWrap: 'wrap' },
    badge: (color) => ({
      padding: '6px 16px', borderRadius: 20,
      fontSize: 13, fontWeight: 500,
      border: `1px solid ${color}55`,
      background: `${color}18`,
      color: color,
    }),
    h1: { fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16 },
    nameAccent1: { color: '#4f8ef7' },
    nameAccent2: {
      display: 'block',
      background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subtitle: { fontSize: 20, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 20 },
    desc: { fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 520, lineHeight: 1.75, marginBottom: 36 },
    actions: { display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 },
    btnPrimary: {
      padding: '12px 28px', borderRadius: 10,
      background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)',
      color: '#fff', fontSize: 15, fontWeight: 600,
      display: 'flex', alignItems: 'center', gap: 8,
      cursor: 'pointer', transition: 'opacity 0.2s, transform 0.15s',
      border: 'none',
    },
    btnSecondary: {
      padding: '12px 28px', borderRadius: 10,
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.12)',
      color: '#fff', fontSize: 15, fontWeight: 600,
      display: 'flex', alignItems: 'center', gap: 8,
      cursor: 'pointer', transition: 'all 0.2s',
    },
    socials: { display: 'flex', gap: 10 },
    socialBtn: {
      width: 44, height: 44, borderRadius: 10,
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 18, cursor: 'pointer', transition: 'all 0.2s', color: '#fff',
    },
    right: {
      flex: '0 0 auto',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
      animation: 'fadeIn 1s ease both 0.3s',
    },
    photoWrap: {
      width: 280, height: 340,
      borderRadius: 24,
      background: 'linear-gradient(135deg, #1a1a2e, #2a1a3e)',
      border: '1px solid rgba(124,58,237,0.3)',
      overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', gap: 12,
      transition: 'border-color 0.2s, transform 0.2s',
      position: 'relative',
      animation: 'float 4s ease-in-out infinite',
    },
    photoImg: { width: '100%', height: '100%', objectFit: 'cover' },
    photoPlaceholder: { textAlign: 'center', padding: '1rem' },
    photoIcon: { fontSize: 56, marginBottom: 10, opacity: 0.5 },
    photoText: { fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 },
    photoTextAccent: { color: '#7c3aed', fontWeight: 600, display: 'block' },
  };

  return (
    <section id="home">
      <div style={s.section}>
        <div style={s.left}>
          <div style={s.badges}>
            <span style={s.badge('#4f8ef7')}>Disponible pour un stage</span>
            <span style={s.badge('#7c3aed')}>2ème année Ingénieur</span>
          </div>

          <h1 style={s.h1}>
            Hi, I'm <span style={s.nameAccent1}>{info.prenom}</span>
            <span style={s.nameAccent2}>{info.nom}</span>
          </h1>

          <p style={s.subtitle}>{info.role} — {info.specialite}</p>
          <p style={s.desc}>{info.description}</p>

          <div style={s.actions}>
            <a href="#contact" style={s.btnPrimary}>
              Get In Touch →
            </a>
            <a href={info.cvUrl} style={s.btnSecondary} download="CV_Aya_Boukari.pdf">
              ↓ Download CV
            </a>
            <a href={info.cvUrl} style={s.btnSecondary} target="_blank" rel="noreferrer">
              Open CV ↗
            </a>
          </div>

          <div style={s.socials}>
            <a href={info.github}   target="_blank" rel="noreferrer" style={s.socialBtn} title="GitHub">⌥</a>
            <a href={info.linkedin} target="_blank" rel="noreferrer" style={s.socialBtn} title="LinkedIn">in</a>
            <a href={`mailto:${info.email}`} style={s.socialBtn} title="Email">✉</a>
          </div>
        </div>

        <div style={s.right}>
          <div
            style={s.photoWrap}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.7)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)'}
          >
            {photo ? (
              <img src={photo} alt="Profil" style={s.photoImg} />
            ) : (
              <div style={s.photoPlaceholder}>
                <div style={s.photoIcon}>👤</div>
                <div style={s.photoText}>
                  <span style={s.photoTextAccent}>+ Ajouter votre photo</span>
                  Cliquez pour uploader
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
