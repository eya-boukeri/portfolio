import React from 'react';
import { education } from '../data/portfolio';

export default function Education() {
  const s = {
    section: { padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4%, 2.5rem)', maxWidth: 1200, margin: '0 auto' },
    heading: { fontSize: 'clamp(1.75rem, 5vw, 2.8rem)', fontWeight: 800, marginBottom: 8 },
    accent: { background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    underline: { width: 60, height: 3, background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', borderRadius: 2, marginBottom: 48 },
    timeline: { display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', paddingLeft: 'clamp(20px, 5vw, 32px)' },
    line: { position: 'absolute', left: 'clamp(8px, 2vw, 10px)', top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom, #7c3aed, #4f8ef7)' },
    item: { position: 'relative' },
    dot: { position: 'absolute', left: 'clamp(-29px, -5vw, -37px)', top: 6, width: 16, height: 16, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', border: '3px solid #0d0d1a', boxSizing: 'border-box' },
    card: { background: '#161625', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 'clamp(1.25rem, 3vw, 1.75rem)', transition: 'border-color 0.2s' },
    cardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, flexWrap: 'wrap', gap: 8 },
    degree: { fontSize: 'clamp(15px, 3vw, 17px)', fontWeight: 700, color: '#fff' },
    period: { fontSize: 'clamp(11px, 2vw, 13px)', color: '#7c3aed', fontWeight: 600, background: 'rgba(124,58,237,0.15)', padding: '3px 12px', borderRadius: 20, border: '1px solid rgba(124,58,237,0.3)', whiteSpace: 'nowrap' },
    school: { fontSize: 'clamp(13px, 2vw, 14px)', color: '#4f8ef7', marginBottom: 12, fontWeight: 500 },
    desc: { fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 14 },
    tags: { display: 'flex', flexWrap: 'wrap', gap: 8 },
    tag: { fontSize: 'clamp(11px, 1.5vw, 12px)', padding: '3px 10px', borderRadius: 6, background: 'rgba(79,142,247,0.1)', border: '1px solid rgba(79,142,247,0.25)', color: '#4f8ef7' },
  };

  return (
    <section id="education" style={{ background: '#0f0f1e' }}>
      <div style={s.section}>
        <h2 style={s.heading}>My <span style={s.accent}>Education</span></h2>
        <div style={s.underline} />
        <div style={s.timeline}>
          <div style={s.line} />
          {education.map((edu, i) => (
            <div key={i} style={s.item}>
              <div style={s.dot} />
              <div style={s.card}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
              >
                <div style={s.cardTop}>
                  <span style={s.degree}>{edu.degree}</span>
                  <span style={s.period}>{edu.period}</span>
                </div>
                <p style={s.school}>{edu.school}</p>
                <p style={s.desc}>{edu.description}</p>
                <div style={s.tags}>
                  {edu.tags.map(t => <span key={t} style={s.tag}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
