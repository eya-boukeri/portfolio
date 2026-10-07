import React, { useState } from 'react';
import { info } from '../data/portfolio';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const displayUrl = (url) => url?.replace(/^https?:\/\//, '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${info.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  const s = {
    section: {
      background: 'var(--bg-primary)',
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
      gap: 20,
    },
    cardList: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    },
    contactCard: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '14px 18px',
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: 'var(--radius-md)',
      transition: 'border-color 0.15s ease, transform 0.15s ease',
    },
    iconWrapper: {
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(37, 99, 235, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#3b82f6',
      flexShrink: 0,
      fontSize: 18,
    },
    cardLabel: {
      fontSize: 12,
      fontWeight: 600,
      color: '#64748b',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      marginBottom: 2,
    },
    cardValue: {
      fontSize: 14,
      fontWeight: 600,
      color: '#f8fafc',
    },
    formCard: {
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    },
    formTitle: {
      fontSize: 18,
      fontWeight: 700,
      color: '#f8fafc',
      marginBottom: 4,
    },
    formSubtitle: {
      fontSize: 13,
      color: '#94a3b8',
      marginBottom: 12,
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
    },
    label: {
      fontSize: 13,
      fontWeight: 600,
      color: '#cbd5e1',
    },
    input: {
      width: '100%',
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      fontSize: 14,
      background: '#0d1322',
      border: '1px solid rgba(148, 163, 184, 0.2)',
      color: '#f8fafc',
      outline: 'none',
      fontFamily: 'inherit',
      transition: 'border-color 0.15s ease',
    },
    textarea: {
      width: '100%',
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      fontSize: 14,
      background: '#0d1322',
      border: '1px solid rgba(148, 163, 184, 0.2)',
      color: '#f8fafc',
      outline: 'none',
      fontFamily: 'inherit',
      resize: 'vertical',
      minHeight: 120,
      transition: 'border-color 0.15s ease',
    },
    submitBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      padding: '13px 24px',
      borderRadius: 'var(--radius-md)',
      background: '#2563eb',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#ffffff',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'background 0.15s ease, transform 0.15s ease',
      marginTop: 6,
    },
  };

  const contactItems = [
    { label: 'Email', val: info.email, href: `mailto:${info.email}`, icon: <FiMail /> },
    { label: 'LinkedIn', val: displayUrl(info.linkedin), href: info.linkedin, icon: <FaLinkedinIn /> },
    { label: 'GitHub', val: displayUrl(info.github), href: info.github, icon: <FaGithub /> },
    { label: 'Phone', val: info.phone, href: `tel:${info.phone.replace(/\s+/g, '')}`, icon: <FiPhone /> },
    { label: 'Location', val: info.location, href: null, icon: <FiMapPin /> },
  ];

  return (
    <section id="contact" style={s.section}>
      <div className="section-wrapper">
        <div className="section-header">
          <div className="section-label">
            <FiMail />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">
            Get in <span className="title-accent">Touch</span>
          </h2>
          <p className="section-subtitle">
            I am currently actively seeking a final-year graduation internship (PFE) in AI or Software Engineering starting February 2027.
          </p>
        </div>

        <div style={s.grid}>
          {/* Left Column: Direct Contact Info */}
          <div style={s.leftCol}>
            <div style={s.cardList}>
              {contactItems.map((item) => {
                const Content = (
                  <div
                    key={item.label}
                    style={s.contactCard}
                    onMouseEnter={(e) => {
                      if (item.href) {
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.35)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (item.href) {
                        e.currentTarget.style.borderColor = 'var(--card-border)';
                        e.currentTarget.style.transform = 'none';
                      }
                    }}
                  >
                    <div style={s.iconWrapper}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={s.cardLabel}>{item.label}</div>
                      <div style={s.cardValue}>{item.val}</div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {Content}
                  </a>
                ) : Content;
              })}
            </div>
          </div>

          {/* Right Column: Direct Messaging Form */}
          <div style={s.formCard}>
            <h3 style={s.formTitle}>Send a Direct Message</h3>
            <p style={s.formSubtitle}>Have an internship opportunity, project, or technical question? Feel free to reach out.</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={s.inputGroup}>
                <label style={s.label}>Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  style={s.input}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(148, 163, 184, 0.2)'}
                />
              </div>

              <div style={s.inputGroup}>
                <label style={s.label}>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  style={s.input}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(148, 163, 184, 0.2)'}
                />
              </div>

              <div style={s.inputGroup}>
                <label style={s.label}>Subject</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. PFE Internship Opportunity"
                  style={s.input}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(148, 163, 184, 0.2)'}
                />
              </div>

              <div style={s.inputGroup}>
                <label style={s.label}>Message</label>
                <textarea
                  required
                  placeholder="Write your message here..."
                  style={s.textarea}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(148, 163, 184, 0.2)'}
                />
              </div>

              <button
                type="submit"
                style={s.submitBtn}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1d4ed8';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#2563eb';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <FiSend size={15} />
                <span>Send Message</span>
              </button>

              {formSubmitted && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#60a5fa', fontSize: 13, marginTop: 4 }}>
                  <FiCheckCircle size={16} />
                  <span>Opening your mail client... Thank you!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
