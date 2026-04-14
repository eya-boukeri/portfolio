import React from 'react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const s = {
    section: { padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4%, 2.5rem)', maxWidth: 1200, margin: '0 auto' },
    heading: { fontSize: 'clamp(1.75rem, 5vw, 2.8rem)', fontWeight: 800, marginBottom: 8 },
    accent: { background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    underline: { width: 60, height: 3, background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', borderRadius: 2, marginBottom: 48 },
    grid: { display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 2vw, 1.5rem)' },
    card: { background: '#161625', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 'clamp(1.25rem, 3vw, 1.75rem)', transition: 'border-color 0.2s', display: 'grid', gridTemplateColumns: 'clamp(1fr, 100%, 1fr auto)', gap: '1rem', alignItems: 'start' },
    role: { fontSize: 'clamp(15px, 3vw, 17px)', fontWeight: 700, marginBottom: 4 },
    company: { fontSize: 'clamp(13px, 2vw, 14px)', color: '#4f8ef7', fontWeight: 500, marginBottom: 12 },
    desc: { fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 14 },
    tags: { display: 'flex', flexWrap: 'wrap', gap: 8 },
    tag: { fontSize: 'clamp(11px, 1.5vw, 12px)', padding: '3px 10px', borderRadius: 6, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', color: '#a78bfa' },
    period: { fontSize: 'clamp(11px, 2vw, 13px)', color: '#7c3aed', fontWeight: 600, background: 'rgba(124,58,237,0.15)', padding: '4px 14px', borderRadius: 20, border: '1px solid rgba(124,58,237,0.3)', whiteSpace: 'nowrap' },
    empty: { textAlign: 'center', padding: '3rem', color: 'rgba(255,255,255,0.3)', fontSize: 'clamp(13px, 2vw, 15px)' },
  };

  return (
    <section id="experience">
      <div style={s.section}>
        <h2 style={s.heading}>My <span style={s.accent}>Experience</span></h2>
        <div style={s.underline} />
        {experiences.length === 0 ? (
          <div style={s.empty}>Aucune expérience encore — mettez à jour src/data/portfolio.js</div>
        ) : (
          <div style={s.grid}>
            {experiences.map((exp, i) => (
              <div key={i} style={s.card}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
              >
                <div>
                  <p style={s.role}>{exp.role}</p>
                  <p style={s.company}>{exp.company}</p>
                  <p style={s.desc}>{exp.description}</p>
                  <div style={s.tags}>
                    {exp.tags.map(t => <span key={t} style={s.tag}>{t}</span>)}
                  </div>
                </div>
                <span style={s.period}>{exp.period}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}