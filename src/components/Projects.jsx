import React from 'react';
import { projects } from '../data/portfolio';
import { FiFolder, FiExternalLink, FiPlay } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa6';

export default function Projects() {
  const s = {
    section: {
      background: 'var(--bg-secondary)',
      borderTop: '1px solid rgba(148, 163, 184, 0.08)',
      borderBottom: '1px solid rgba(148, 163, 184, 0.08)',
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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
      height: '100%',
    },
    cardTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    folderIcon: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(37, 99, 235, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#3b82f6',
    },
    headerLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    iconLink: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(255, 255, 255, 0.04)',
      border: '1px solid rgba(148, 163, 184, 0.15)',
      color: '#cbd5e1',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 15,
      transition: 'all 0.15s ease',
    },
    title: {
      fontSize: 17,
      fontWeight: 700,
      color: '#f8fafc',
      marginBottom: 10,
      lineHeight: 1.35,
    },
    desc: {
      fontSize: 14,
      color: '#94a3b8',
      lineHeight: 1.7,
      marginBottom: 20,
      flex: 1,
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      paddingTop: 14,
      borderTop: '1px solid rgba(148, 163, 184, 0.08)',
    },
    tag: {
      fontSize: 12,
      fontWeight: 500,
      padding: '3px 9px',
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(37, 99, 235, 0.08)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      color: '#93c5fd',
    },
    videoBox: {
      marginTop: 12,
      marginBottom: 16,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: '#090d16',
      border: '1px solid rgba(148, 163, 184, 0.18)',
    },
    videoTopBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '7px 12px',
      background: 'rgba(255, 255, 255, 0.03)',
      borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
      fontSize: 12,
      fontWeight: 600,
      color: '#93c5fd',
    },
    videoEl: {
      width: '100%',
      maxHeight: 200,
      display: 'block',
      background: '#000000',
      outline: 'none',
    },
  };

  return (
    <section id="projects" style={s.section}>
      <div className="section-wrapper">
        <div className="section-header">
          <div className="section-label">
            <FiFolder />
            <span>Featured Engineering</span>
          </div>
          <h2 className="section-title">
            Featured <span className="title-accent">Projects</span>
          </h2>
          <p className="section-subtitle">
            Autonomous agentic platforms, distributed IoT medical telemetry, and production-grade full-stack systems.
          </p>
        </div>

        <div style={s.grid}>
          {projects.map((p, i) => {
            const hasValidGithub = p.github && p.github !== '#' && p.github !== 'null';
            const hasDemo = Boolean(p.demo);

            return (
              <div
                key={i}
                style={s.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 24px -4px rgba(0, 0, 0, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={s.cardTop}>
                    <div style={s.folderIcon}>
                      <FiFolder size={20} />
                    </div>
                    <div style={s.headerLinks}>
                      {hasValidGithub && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={s.iconLink}
                          aria-label={`GitHub repository for ${p.title}`}
                          title="View Source on GitHub"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#f8fafc';
                            e.currentTarget.style.borderColor = '#3b82f6';
                            e.currentTarget.style.background = 'rgba(37, 99, 235, 0.12)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#cbd5e1';
                            e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.15)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                          }}
                        >
                          <FaGithub size={16} />
                        </a>
                      )}
                      {hasDemo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={s.iconLink}
                          aria-label={`Demonstration for ${p.title}`}
                          title="View Demonstration"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#f8fafc';
                            e.currentTarget.style.borderColor = '#3b82f6';
                            e.currentTarget.style.background = 'rgba(37, 99, 235, 0.12)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#cbd5e1';
                            e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.15)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                          }}
                        >
                          {p.demo.endsWith('.mp4') ? <FiPlay size={15} /> : <FiExternalLink size={15} />}
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 style={s.title}>{p.title}</h3>
                  <p style={s.desc}>{p.description}</p>

                  {p.demo && p.demo.endsWith('.mp4') && (
                    <div style={s.videoBox}>
                      <div style={s.videoTopBar}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <FiPlay size={12} color="#3b82f6" />
                          <span>{p.videoLabel || 'Video Demonstration'}</span>
                        </span>
                        <span style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>MP4</span>
                      </div>
                      <video
                        controls
                        preload="metadata"
                        playsInline
                        style={s.videoEl}
                      >
                        <source src={p.demo} type="video/mp4" />
                        Your browser does not support HTML5 video playback.
                      </video>
                    </div>
                  )}
                </div>

                <div style={s.tags}>
                  {p.tags.map((t) => (
                    <span key={t} style={s.tag}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
