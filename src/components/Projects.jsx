import React from 'react';
import { projects } from '../data/portfolio';

export default function Projects() {
  const s = {
    section: { padding: '6rem 2.5rem', maxWidth: 1200, margin: '0 auto' },
    heading: { fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: 8 },
    accent: { background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    underline: { width: 60, height: 3, background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', borderRadius: 2, marginBottom: 48 },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' },
    card: {
      background: '#161625', border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 16, padding: '1.75rem',
      display: 'flex', flexDirection: 'column',
      transition: 'border-color 0.2s, transform 0.2s',
      cursor: 'pointer',
    },
    cardIcon: {
      width: 48, height: 48, borderRadius: 12,
      background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(79,142,247,0.2))',
      border: '1px solid rgba(124,58,237,0.2)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 22, marginBottom: 16,
    },
    title: { fontSize: 16, fontWeight: 700, marginBottom: 10 },
    desc: { fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 18, flex: 1 },
    tags: { display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 },
    tag: { fontSize: 12, padding: '3px 10px', borderRadius: 6, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', color: '#a78bfa' },
    links: { display: 'flex', gap: 10 },
    linkBtn: (primary) => ({
      flex: 1, padding: '8px 0', borderRadius: 8, textAlign: 'center',
      fontSize: 13, fontWeight: 600, cursor: 'pointer',
      background: primary ? 'linear-gradient(135deg, #7c3aed, #4f8ef7)' : 'rgba(255,255,255,0.05)',
      border: primary ? 'none' : '1px solid rgba(255,255,255,0.1)',
      color: '#fff', transition: 'opacity 0.2s',
    }),
  };

  const icons = ['💻', '📊', '📱', '🤖', '⚡', '🔬'];

  return (
    <section id="projects" style={{ background: '#0f0f1e' }}>
      <div style={s.section}>
        <h2 style={s.heading}>My <span style={s.accent}>Projects</span></h2>
        <div style={s.underline} />
        <div style={s.grid}>
          {projects.map((p, i) => (
            <div key={i} style={s.card}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'none'; }}
            >
              <div style={s.cardIcon}>{icons[i % icons.length]}</div>
              <p style={s.title}>{p.title}</p>
              <p style={s.desc}>{p.description}</p>
              <div style={s.tags}>
                {p.tags.map(t => <span key={t} style={s.tag}>{t}</span>)}
              </div>
              <div style={s.links}>
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" style={s.linkBtn(false)}>⌥ GitHub</a>}
                {p.demo   && <a href={p.demo}   target="_blank" rel="noreferrer" style={s.linkBtn(true)}>↗ Demo</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
