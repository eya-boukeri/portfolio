import React from 'react';
import { info, aboutCards, languages } from '../data/portfolio';
import { FiMapPin, FiCpu, FiAward, FiCheckCircle, FiGlobe, FiLayers } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa6';

export default function About() {
  const getCardIcon = (key) => {
    switch (key) {
      case 'location':  return <FiMapPin size={20} color="#3b82f6" />;
      case 'education': return <FaGraduationCap size={20} color="#3b82f6" />;
      case 'focus':     return <FiCpu size={20} color="#3b82f6" />;
      case 'goal':      return <FiAward size={20} color="#3b82f6" />;
      default:          return <FiCheckCircle size={20} color="#3b82f6" />;
    }
  };

  const s = {
    section: {
      background: 'var(--bg-secondary)',
      borderTop: '1px solid rgba(148, 163, 184, 0.08)',
      borderBottom: '1px solid rgba(148, 163, 184, 0.08)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
      gap: 'clamp(2rem, 5vw, 3.5rem)',
      alignItems: 'start',
    },
    leftCol: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
    },
    para: {
      fontSize: 'clamp(14px, 2vw, 15px)',
      color: '#94a3b8',
      lineHeight: 1.8,
    },
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: 14,
      marginTop: 10,
      marginBottom: 10,
    },
    infoCard: {
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: 'var(--radius-md)',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      transition: 'border-color 0.2s ease, transform 0.2s ease',
    },
    infoCardIcon: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: 'rgba(37, 99, 235, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoCardTitle: {
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: '#64748b',
    },
    infoCardValue: {
      fontSize: 14,
      fontWeight: 600,
      color: '#f8fafc',
    },
    langSection: {
      paddingTop: 16,
      borderTop: '1px solid rgba(148, 163, 184, 0.1)',
    },
    langTitle: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: '#94a3b8',
      marginBottom: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    },
    langPills: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
    },
    langPill: {
      padding: '6px 14px',
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(255, 255, 255, 0.04)',
      border: '1px solid rgba(148, 163, 184, 0.15)',
      fontSize: 13,
      color: '#cbd5e1',
    },
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
    },
    summaryCard: {
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '24px',
    },
    summaryTitle: {
      fontSize: 16,
      fontWeight: 700,
      color: '#f8fafc',
      marginBottom: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    },
    specList: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    },
    specItem: {
      fontSize: 14,
      color: '#cbd5e1',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      lineHeight: 1.5,
    },
  };

  return (
    <section id="about" style={s.section}>
      <div className="section-wrapper">
        <div className="section-header">
          <div className="section-label">
            <FiLayers />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">
            About <span className="title-accent">Me</span>
          </h2>
          <p className="section-subtitle">
            An engineering profile driven by rigorous computational thinking, distributed architecture design, and real-world AI applications.
          </p>
        </div>

        <div style={s.grid}>
          {/* Left Column: Biography & Fast Facts */}
          <div style={s.leftCol}>
            {info.about.map((para, i) => (
              <p key={i} style={s.para}>{para}</p>
            ))}

            {/* Quick Metrics Cards */}
            <div style={s.cardsGrid}>
              {aboutCards.map((card) => (
                <div
                  key={card.key}
                  style={s.infoCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--card-border)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <div style={s.infoCardIcon}>
                    {getCardIcon(card.key)}
                  </div>
                  <div>
                    <div style={s.infoCardTitle}>{card.title}</div>
                    <div style={s.infoCardValue}>{card.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Spoken Languages */}
            <div style={s.langSection}>
              <div style={s.langTitle}>
                <FiGlobe size={15} color="#3b82f6" />
                <span>Languages</span>
              </div>
              <div style={s.langPills}>
                {languages.map(({ lang, level }) => (
                  <span key={lang} style={s.langPill}>
                    <strong style={{ color: '#f8fafc' }}>{lang}</strong> · {level}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Specializations & Highlights */}
          <div style={s.sidebar}>
            <div style={s.summaryCard}>
              <h3 style={s.summaryTitle}>
                <FiCpu color="#3b82f6" />
                <span>Core Competencies</span>
              </h3>
              <ul style={s.specList}>
                {[
                  'Agentic AI Workflows & Multi-Agent Reasoning',
                  'LLMs & Retrieval-Augmented Generation (RAG)',
                  'Distributed Microservices & Event Buses (Kafka, MQTT)',
                  'IoMT Telemonitoring & Edge Signal Processing',
                  'Enterprise Full-Stack Web (.NET 8, Spring Boot, React)',
                  'Relational & Time-Series Data Engineering',
                ].map((item) => (
                  <li key={item} style={s.specItem}>
                    <FiCheckCircle size={16} color="#3b82f6" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={s.summaryCard}>
              <h3 style={s.summaryTitle}>
                <FaGraduationCap color="#3b82f6" />
                <span>Academic Track</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13, color: '#94a3b8' }}>
                <div>
                  <strong style={{ color: '#f8fafc' }}>ENIT — National School of Engineers of Tunis</strong>
                  <div>Engineering Degree in Software Engineering (2024 — 2027)</div>
                </div>
                <div style={{ paddingTop: 8, borderTop: '1px solid rgba(148, 163, 184, 0.08)' }}>
                  <strong style={{ color: '#f8fafc' }}>IPEIM — Preparatory Institute for Engineering Studies</strong>
                  <div>Math-Physics Curriculum · National Exam Rank: 405 / 1700</div>
                </div>
              </div>
            </div>

            <div style={s.summaryCard}>
              <h3 style={s.summaryTitle}>
                <FiAward color="#3b82f6" />
                <span>Certifications & Leadership</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13, color: '#94a3b8' }}>
                <div>
                  <strong style={{ color: '#f8fafc' }}>Cisco Certifications</strong>
                  <div>CCNA 1 (Intro to Networks) & CCNA 2 (Switching, Routing, Wireless)</div>
                </div>
                <div style={{ paddingTop: 8, borderTop: '1px solid rgba(148, 163, 184, 0.08)' }}>
                  <strong style={{ color: '#f8fafc' }}>AI Specialization</strong>
                  <div>Efficient LLM Customization</div>
                </div>
                <div style={{ paddingTop: 8, borderTop: '1px solid rgba(148, 163, 184, 0.08)' }}>
                  <strong style={{ color: '#f8fafc' }}>IEEE ENIT WIE</strong>
                  <div>Treasurer & General Secretary (2024–2025) · 3rd place WIE Challenge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
