import React from 'react';
import { info, aboutCards, languages } from '../data/portfolio';

export default function About() {
  const s = {
    section: { padding: '6rem 2.5rem', maxWidth: 1200, margin: '0 auto' },
    heading: { fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: 8 },
    headingAccent: {
      background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    },
    underline: { width: 60, height: 3, background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', borderRadius: 2, marginBottom: 48 },
    grid: { display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' },
    textBlock: {},
    para: { fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 },
    paraAccent: { color: '#7c3aed', fontWeight: 500 },
    paraAccent2: { color: '#4f8ef7', fontWeight: 500 },
    sidebar: { display: 'flex', flexDirection: 'column', gap: 16 },
    quickCard: {
      background: '#161625',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 16, padding: '1.5rem',
    },
    quickTitle: { fontSize: 16, fontWeight: 700, marginBottom: 16 },
    quickRow: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 },
    quickIcon: { fontSize: 16, color: '#4f8ef7' },
    quickLabel: { fontSize: 14, fontWeight: 600, color: '#fff' },
    quickVal: { fontSize: 13, color: 'rgba(255,255,255,0.5)' },
    specCard: {
      background: 'linear-gradient(135deg, #1a1235, #1a1a2e)',
      border: '1px solid rgba(124,58,237,0.2)',
      borderRadius: 16, padding: '1.5rem',
    },
    specIcon: { fontSize: 32, marginBottom: 12 },
    specTitle: { fontSize: 16, fontWeight: 700, marginBottom: 14 },
    specList: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 },
    specItem: { fontSize: 13, color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: 8 },
    specDot: { width: 6, height: 6, borderRadius: '50%', background: '#7c3aed', flexShrink: 0 },
    cardsRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: '2rem' },
    infoCard: {
      background: '#161625',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 14, padding: '1.25rem',
    },
    infoIcon: { fontSize: 24, marginBottom: 8 },
    infoTitle: { fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 4 },
    infoVal: { fontSize: 13, color: 'rgba(255,255,255,0.5)' },
    langSection: { marginTop: '2.5rem' },
    langTitle: { fontSize: 18, fontWeight: 700, marginBottom: 16 },
    langRow: { display: 'flex', gap: 12, flexWrap: 'wrap' },
    langTag: {
      padding: '8px 20px', borderRadius: 10,
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      fontSize: 14, color: 'rgba(255,255,255,0.7)',
    },
  };

  return (
    <section id="about" style={{ background: '#0f0f1e' }}>
      <div style={s.section}>
        <h2 style={s.heading}>About <span style={s.headingAccent}>Me</span></h2>
        <div style={s.underline} />

        <div style={s.grid}>
          {/* LEFT TEXT */}
          <div style={s.textBlock}>
            {info.about.map((para, i) => (
              <p key={i} style={s.para}>{para}</p>
            ))}

            <div style={s.cardsRow}>
              {aboutCards.map((c) => (
                <div key={c.title} style={s.infoCard}>
                  <div style={s.infoIcon}>{c.icon}</div>
                  <div style={s.infoTitle}>{c.title}</div>
                  <div style={s.infoVal}>{c.value}</div>
                </div>
              ))}
            </div>

            <div style={s.langSection}>
              <p style={s.langTitle}>Languages</p>
              <div style={s.langRow}>
                {['Arabic (Native)', 'French (C1)', 'English (B2)'].map(l => (
                  <span key={l} style={s.langTag}>{l}</span>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={s.sidebar}>
            <div style={s.quickCard}>
              <p style={s.quickTitle}>Quick Facts</p>
              {[
                { icon: '📅', label: 'Graduation', val: info.quickFacts.graduation },
                { icon: '🏛', label: 'Institution', val: info.quickFacts.institution },
                { icon: '</>', label: 'Interests',  val: info.quickFacts.interests },
              ].map(r => (
                <div key={r.label} style={s.quickRow}>
                  <span style={s.quickIcon}>{r.icon}</span>
                  <div>
                    <div style={s.quickLabel}>{r.label}</div>
                    <div style={s.quickVal}>{r.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={s.specCard}>
              <div style={s.specIcon}>🧠</div>
              <p style={s.specTitle}>Spécialisations</p>
              <ul style={s.specList}>
                {['Full-Stack Web', 'IA / LLM', 'Algorithmique', 'Bases de donnees', 'IoT', 'Microservices', 'Reseaux'].map(item => (
                  <li key={item} style={s.specItem}>
                    <span style={s.specDot} />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
