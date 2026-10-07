import React from 'react';
import { experiences } from '../data/portfolio';
import { FiBriefcase, FiCalendar, FiArrowRight } from 'react-icons/fi';

export default function Experience() {
  const s = {
    section: {
      background: 'var(--bg-primary)',
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
      gap: 14,
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 12,
    },
    roleTitle: {
      fontSize: 'clamp(16px, 2.5vw, 18px)',
      fontWeight: 700,
      color: '#f8fafc',
      marginBottom: 4,
    },
    companyName: {
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
    description: {
      fontSize: 14,
      color: '#94a3b8',
      lineHeight: 1.75,
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      paddingTop: 8,
      borderTop: '1px solid rgba(148, 163, 184, 0.08)',
    },
    tag: {
      fontSize: 12,
      fontWeight: 500,
      color: '#cbd5e1',
      background: 'rgba(255, 255, 255, 0.04)',
      border: '1px solid rgba(148, 163, 184, 0.12)',
      padding: '3px 10px',
      borderRadius: 'var(--radius-sm)',
    },
  };

  return (
    <section id="experience" style={s.section}>
      <div className="section-wrapper">
        <div className="section-header">
          <div className="section-label">
            <FiBriefcase />
            <span>Career & Practical Experience</span>
          </div>
          <h2 className="section-title">
            Work <span className="title-accent">Experience</span>
          </h2>
          <p className="section-subtitle">
            Engineering internships, club technical leadership, and collaborative academic delivery.
          </p>
        </div>

        <div style={s.timeline}>
          {experiences.map((exp, i) => (
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
              <div style={s.cardHeader}>
                <div>
                  <h3 style={s.roleTitle}>{exp.role}</h3>
                  <div style={s.companyName}>
                    <FiBriefcase size={14} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div style={s.periodBadge}>
                  <FiCalendar size={13} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p style={s.description}>{exp.description}</p>

              <div style={s.tagsContainer}>
                {exp.tags.map((t) => (
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