import React from 'react';
import { skillCategories } from '../data/portfolio';
import { FiCpu, FiServer, FiLayers, FiCode, FiDatabase, FiLayout, FiCheck } from 'react-icons/fi';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'brain':    return <FiCpu size={20} color="#3b82f6" />;
      case 'server':   return <FiServer size={20} color="#3b82f6" />;
      case 'cloud':    return <FiLayers size={20} color="#3b82f6" />;
      case 'code':     return <FiCode size={20} color="#3b82f6" />;
      case 'database': return <FiDatabase size={20} color="#3b82f6" />;
      case 'layout':   return <FiLayout size={20} color="#3b82f6" />;
      default:         return <FiLayers size={20} color="#3b82f6" />;
    }
  };

  const s = {
    section: {
      background: 'var(--bg-primary)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
      gap: '1.5rem',
    },
    card: {
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.75rem',
      transition: 'border-color 0.2s ease, transform 0.2s ease',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      paddingBottom: 14,
      borderBottom: '1px solid rgba(148, 163, 184, 0.08)',
    },
    iconWrapper: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(37, 99, 235, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    categoryTitle: {
      fontSize: 16,
      fontWeight: 700,
      color: '#f8fafc',
    },
    skillsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
    },
    skillPill: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(255, 255, 255, 0.035)',
      border: '1px solid rgba(148, 163, 184, 0.14)',
      fontSize: 13,
      fontWeight: 500,
      color: '#cbd5e1',
      transition: 'all 0.15s ease',
    },
    checkIcon: {
      color: '#3b82f6',
      fontSize: 12,
    },
  };

  return (
    <section id="skills" style={s.section}>
      <div className="section-wrapper">
        <div className="section-header">
          <div className="section-label">
            <FiCpu />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="title-accent">Tooling</span>
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, data pipelines, and infrastructure tools utilized in production and academic engineering.
          </p>
        </div>

        <div style={s.grid}>
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
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
                <div style={s.iconWrapper}>
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 style={s.categoryTitle}>{cat.name}</h3>
              </div>

              <div style={s.skillsContainer}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={s.skillPill}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.35)';
                      e.currentTarget.style.background = 'rgba(37, 99, 235, 0.08)';
                      e.currentTarget.style.color = '#f8fafc';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.14)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.035)';
                      e.currentTarget.style.color = '#cbd5e1';
                    }}
                  >
                    <FiCheck style={s.checkIcon} />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
