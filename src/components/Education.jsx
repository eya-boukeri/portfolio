import React from 'react';
import { education } from '../data/portfolio';
import { FiCalendar, FiBookOpen } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa6';

export default function Education() {
  const s = {
    section: {
      background: 'var(--bg-secondary)',
      borderTop: '1px solid rgba(148, 163, 184, 0.08)',
      borderBottom: '1px solid rgba(148, 163, 184, 0.08)',
    },
    timeline: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      position: 'relative',
    },
    card: {
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'clamp(1.25rem, 3vw, 1.75rem)',
      transition: 'border-color 0.2s ease, transform 0.2s ease',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    },
    cardTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 12,
    },
    degree: {
      fontSize: 'clamp(16px, 2.5vw, 18px)',
      fontWeight: 700,
      color: '#f8fafc',
      marginBottom: 4,
    },
    school: {
      fontSize: 14,
      fontWeight: 600,
      color: '#3b82f6',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
    },
    periodBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      fontWeight: 600,
      color: '#94a3b8',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(148, 163, 184, 0.15)',
      padding: '4px 12px',
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
    },
    desc: {
      fontSize: 14,
      color: '#94a3b8',
      lineHeight: 1.75,
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      paddingTop: 8,
      borderTop: '1px solid rgba(148, 163, 184, 0.08)',
    },
    tag: {
      fontSize: 12,
      fontWeight: 500,
      padding: '3px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(255, 255, 255, 0.04)',
      border: '1px solid rgba(148, 163, 184, 0.12)',
      color: '#cbd5e1',
    },
  };

  return (
    <section id="education" style={s.section}>
      <div className="section-wrapper">
        <div className="section-header">
          <div className="section-label">
            <FaGraduationCap />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="title-accent">Degrees</span>
          </h2>
          <p className="section-subtitle">
            Rigorous engineering studies at ENIT and intensive preparatory national curriculum.
          </p>
        </div>

        <div style={s.timeline}>
          {education.map((edu, i) => (
            <div
              key={i}
              style={s.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.35)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--card-border)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div style={s.cardTop}>
                <div>
                  <h3 style={s.degree}>{edu.degree}</h3>
                  <div style={s.school}>
                    <FiBookOpen size={14} />
                    <span>{edu.school}</span>
                  </div>
                </div>
                <div style={s.periodBadge}>
                  <FiCalendar size={13} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <p style={s.desc}>{edu.description}</p>

              <div style={s.tags}>
                {edu.tags.map((t) => (
                  <span key={t} style={s.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
