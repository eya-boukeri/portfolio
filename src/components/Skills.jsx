import React from 'react';
import { skillCategories } from '../data/portfolio';

export default function Skills() {
  const s = {
    section: { padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4%, 2.5rem)', maxWidth: 1200, margin: '0 auto' },
    heading: { fontSize: 'clamp(1.75rem, 5vw, 2.8rem)', fontWeight: 800, marginBottom: 8 },
    accent: { background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    underline: { width: 60, height: 3, background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', borderRadius: 2, marginBottom: 48 },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(160px, 100%), 1fr))', gap: 'clamp(1rem, 2vw, 1.25rem)' },
    card: {
      background: '#161625', border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 16, padding: 'clamp(1.25rem, 3vw, 1.5rem)',
      transition: 'border-color 0.2s, transform 0.2s',
    },
    catHeader: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 },
    catIcon: { fontSize: 'clamp(18px, 4vw, 20px)' },
    catName: { fontSize: 'clamp(13px, 3vw, 15px)', fontWeight: 700 },
    skillList: { display: 'flex', flexDirection: 'column', gap: 10 },
    skillName: { fontSize: 'clamp(11px, 2vw, 13px)', color: 'rgba(255,255,255,0.7)', fontWeight: 500 },
  };

  return (
    <section id="skills">
      <div style={s.section}>
        <h2 style={s.heading}>My <span style={s.accent}>Skills</span></h2>
        <div style={s.underline} />
        <div style={s.grid}>
          {skillCategories.map((cat) => (
            <div key={cat.name} style={s.card}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${cat.color}55`; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'none'; }}
            >
              <div style={s.catHeader}>
                <span style={{ ...s.catName, color: cat.color }}>{cat.name}</span>
              </div>
              <div style={s.skillList}>
                {cat.skills.map((skill) => (
                  <div key={skill}>
                    <span style={s.skillName}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
