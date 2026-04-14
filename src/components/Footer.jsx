import React from 'react';
import { info } from '../data/portfolio';

export default function Footer() {
  const s = {
    footer: { borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(1.5rem, 4vw, 2rem) clamp(1rem, 4%, 2.5rem)', textAlign: 'center' },
    text: { fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(255,255,255,0.35)' },
    accent: { background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 600 },
  };
  return (
    <footer style={s.footer}>
      <p style={s.text}>
        Conçu & développé par <span style={s.accent}>{info.prenom} {info.nom}</span> ·
      </p>
    </footer>
  );
}
