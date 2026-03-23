import React from 'react';
import { skillCategories } from '../data/portfolio';

export default function Skills() {
  const s = {
    section: { padding: '6rem 2.5rem', maxWidth: 1200, margin: '0 auto' },
    heading: { fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: 8 },
    accent: { background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    underline: { width: 60, height: 3, background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', borderRadius: 2, marginBottom: 48 },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' },
    card: {
      background: '#161625', border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 16, padding: '1.5rem',
      transition: 'border-color 0.2s, transform 0.2s',
    },
    catHeader: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 },
    catIcon: { fontSize: 20 },
    catName: { fontSize: 15, fontWeight: 700 },
    skillList: { display: 'flex', flexDirection: 'column', gap: 10 },
    skillRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    skillName: { fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 },
    bar: { height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.08)', flex: 1, margin: '0 10px', overflow: 'hidden' },
    barFill: (color, w) => ({ height: '100%', width: w, background: color, borderRadius: 2, transition: 'width 1s ease' }),
  };

  const widths = ['90%', '85%', '80%', '75%', '70%'];

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
                <span style={s.catIcon}>{cat.icon}</span>
                <span style={{ ...s.catName, color: cat.color }}>{cat.name}</span>
              </div>
              <div style={s.skillList}>
                {cat.skills.map((skill, i) => (
                  <div key={skill} style={s.skillRow}>
                    <span style={s.skillName}>{skill}</span>
                    <div style={s.bar}>
                      <div style={s.barFill(cat.color, widths[i] || '65%')} />
                    </div>
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
