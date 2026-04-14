import React from 'react';
import { info } from '../data/portfolio';

export default function Contact() {
  const displayUrl = url => url?.replace(/^https?:\/\//, '');

  const s = {
    section: { padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4%, 2.5rem)', maxWidth: 1200, margin: '0 auto' },
    heading: { fontSize: 'clamp(1.75rem, 5vw, 2.8rem)', fontWeight: 800, marginBottom: 8 },
    accent: { background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    underline: { width: 60, height: 3, background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)', borderRadius: 2, marginBottom: 48 },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 100%), 1fr))', gap: 'clamp(2rem, 5vw, 3rem)', alignItems: 'start' },
    subtitle: { fontSize: 'clamp(14px, 2vw, 16px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '2rem' },
    infoList: { display: 'flex', flexDirection: 'column', gap: 16 },
    infoItem: { display: 'flex', alignItems: 'center', gap: 14, padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.25rem)', background: '#161625', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12 },
    infoIcon: { width: 40, height: 40, borderRadius: 10, background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 },
    infoLabel: { fontSize: 'clamp(11px, 1.5vw, 12px)', color: 'rgba(255,255,255,0.4)', marginBottom: 2 },
    infoVal: { fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 500 },
    form: { display: 'flex', flexDirection: 'column', gap: 16 },
    input: {
      padding: 'clamp(10px 12px, 2vw, 12px 16px)', borderRadius: 10, fontSize: 'clamp(13px, 2vw, 14px)',
      background: '#161625', border: '1px solid rgba(255,255,255,0.1)',
      color: '#fff', outline: 'none', fontFamily: 'inherit',
      transition: 'border-color 0.2s',
    },
    textarea: {
      padding: 'clamp(10px 12px, 2vw, 12px 16px)', borderRadius: 10, fontSize: 'clamp(13px, 2vw, 14px)',
      background: '#161625', border: '1px solid rgba(255,255,255,0.1)',
      color: '#fff', outline: 'none', fontFamily: 'inherit',
      resize: 'vertical', minHeight: 'clamp(100px, 30vw, 120px)',
      transition: 'border-color 0.2s',
    },
    submitBtn: {
      padding: 'clamp(11px, 2vw, 13px)', borderRadius: 10, fontSize: 'clamp(13px, 2vw, 15px)', fontWeight: 600,
      background: 'linear-gradient(135deg, #7c3aed, #4f8ef7)',
      color: '#fff', cursor: 'pointer', border: 'none',
      transition: 'opacity 0.2s', fontFamily: 'inherit',
    },
  };

  return (
    <section id="contact" style={{ background: '#0f0f1e' }}>
      <div style={s.section}>
        <h2 style={s.heading}>Get In <span style={s.accent}>Touch</span></h2>
        <div style={s.underline} />
        <div style={s.grid}>
          <div>
            <p style={s.subtitle}>
              I am currently looking for an engineering internship.<br />
              Feel free to contact me to discuss opportunities.
            </p>
            <div style={s.infoList}>
              {[
                { icon: '✉', label: 'Email', val: info.email, href: `mailto:${info.email}` },
                { icon: '📞', label: 'Phone', val: info.phone, href: info.phone ? `tel:${info.phone.replace(/\s+/g, '')}` : null },
                { icon: 'in', label: 'LinkedIn', val: displayUrl(info.linkedin), href: info.linkedin },
                { icon: '⌥', label: 'GitHub', val: displayUrl(info.github), href: info.github },
                { icon: '📍', label: 'Location', val: info.location, href: null },
              ].map(item => (
                <div key={item.label} style={s.infoItem}>
                  <div style={s.infoIcon}>{item.icon}</div>
                  <div>
                    <div style={s.infoLabel}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} style={{ ...s.infoVal, color: '#4f8ef7' }}>{item.val}</a>
                      : <div style={s.infoVal}>{item.val}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            style={s.form}
            action={`https://formsubmit.co/${info.email}`}
            method="POST"
            target="_blank"
          >
            <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              style={s.input}
              type="text"
              name="name"
              placeholder="Votre nom"
              required
            />
            <input
              style={s.input}
              type="email"
              name="email"
              placeholder="Votre email"
              required
            />
            <textarea
              style={s.textarea}
              name="message"
              placeholder="Votre message..."
              required
            />
            <button
              type="submit"
              style={s.submitBtn}
              onMouseEnter={e => e.target.style.opacity = 0.85}
              onMouseLeave={e => e.target.style.opacity = 1}
            >
              Envoyer le message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
