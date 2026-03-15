'use client';

import { useState, useEffect } from 'react';
import { shops } from '@/lib/shops';
import { Lang } from '@/lib/i18n';
import MegaNav from '@/components/shared/MegaNav';
import Footer from '@/components/shared/Footer';

const shop = shops.dynamik;
const ACCENT = '#2563eb';
const SERIF = 'var(--font-cormorant), Georgia, serif';

const hours = [
  { dayFr: 'Lundi \u2013 Vendredi', dayEn: 'Monday \u2013 Friday', time: '8h00 \u2013 17h00' },
  { dayFr: 'Samedi', dayEn: 'Saturday', time: '9h00 \u2013 14h00' },
  { dayFr: 'Dimanche', dayEn: 'Sunday', timeFr: 'Ferm\u00e9', timeEn: 'Closed', closed: true },
];

export default function DynamikContactPage() {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('moto-lang') as Lang | null;
    if (saved === 'en') setLang('en');
  }, []);

  const handleLangToggle = (l: Lang) => {
    setLang(l);
    localStorage.setItem('moto-lang', l);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <MegaNav shop={shop} lang={lang} onToggleLang={handleLangToggle} />

      {/* ── HERO ── */}
      <section style={{ paddingTop: 100, padding: '100px 24px 56px', background: '#f5f4f0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <nav style={{ fontSize: 12, color: '#888', marginBottom: 32 }}>
            <a href="/dynamik" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 600 }}>
              Dynamik Performance
            </a>
            <span style={{ margin: '0 8px', color: '#ccc' }}>/</span>
            <span>Contact</span>
          </nav>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>
            CONTACT
          </p>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 300,
              color: '#0a0a0a',
              fontFamily: SERIF,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: 16,
            }}
          >
            {lang === 'fr' ? 'Contactez-nous.' : 'Get in touch.'}
          </h1>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.65 }}>
            {lang === 'fr'
              ? 'R\u00e9servation, question sur votre moto ou demande de Vespa \u2014 on vous r\u00e9pond rapidement.'
              : 'Booking, question about your motorcycle, or Vespa inquiry \u2014 we respond fast.'}
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section style={{ padding: '64px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 48 }} className="contact-cards">
            {/* Phone */}
            <div style={{ background: '#f5f4f0', border: '1px solid #e8e3d8', borderRadius: 14, padding: '28px 24px' }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>📞</div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888', marginBottom: 8 }}>
                {lang === 'fr' ? 'T\u00e9l\u00e9phone' : 'Phone'}
              </p>
              <a href="tel:8197729444" style={{ fontSize: 20, fontWeight: 700, color: ACCENT, textDecoration: 'none', fontFamily: SERIF, display: 'block', marginBottom: 4 }}>
                819-772-9444
              </a>
              <p style={{ fontSize: 12, color: '#888' }}>
                {lang === 'fr' ? 'Du lun au sam en heures d\u2019ouverture' : 'Mon to Sat during business hours'}
              </p>
            </div>

            {/* Address */}
            <div style={{ background: '#f5f4f0', border: '1px solid #e8e3d8', borderRadius: 14, padding: '28px 24px' }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>📍</div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888', marginBottom: 8 }}>
                {lang === 'fr' ? 'Adresse' : 'Address'}
              </p>
              <a
                href="https://maps.google.com/?q=144+Ch+Freeman+Gatineau+QC+J8Z+2B4"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 15, fontWeight: 600, color: ACCENT, textDecoration: 'none', display: 'block', marginBottom: 4, lineHeight: 1.4 }}
              >
                144 Ch. Freeman<br />Gatineau, QC J8Z 2B4
              </a>
              <p style={{ fontSize: 12, color: '#888' }}>
                {lang === 'fr' ? 'Voir sur Google Maps \u2192' : 'View on Google Maps \u2192'}
              </p>
            </div>

            {/* Book */}
            <div style={{ background: `${ACCENT}08`, border: `1px solid ${ACCENT}25`, borderRadius: 14, padding: '28px 24px' }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>📋</div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: ACCENT, marginBottom: 8 }}>
                {lang === 'fr' ? 'R\u00e9server en ligne' : 'Book online'}
              </p>
              <p style={{ fontSize: 15, fontWeight: 600, color: '#0a0a0a', marginBottom: 12, lineHeight: 1.4 }}>
                {lang === 'fr' ? 'R\u00e9servation rapide\nen 2 minutes' : 'Quick booking\nin 2 minutes'}
              </p>
              <a
                href="/dynamik#booking"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: ACCENT, color: '#fff', padding: '12px 20px', borderRadius: 100, fontSize: 13, fontWeight: 700, textDecoration: 'none', minHeight: 44 }}
              >
                {lang === 'fr' ? 'R\u00e9server' : 'Book'} \u2192
              </a>
            </div>
          </div>

          {/* Hours + Map */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="hours-map-grid">
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 300, color: '#0a0a0a', fontFamily: SERIF, marginBottom: 20 }}>
                {lang === 'fr' ? 'Heures d\u2019ouverture' : 'Hours of operation'}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {hours.map((h, i) => (
                  <div
                    key={h.dayFr}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: i < hours.length - 1 ? '1px solid #f0ece4' : 'none',
                    }}
                  >
                    <span style={{ fontSize: 14, color: '#555' }}>
                      {lang === 'fr' ? h.dayFr : h.dayEn}
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: h.closed ? '#bbb' : '#0a0a0a' }}>
                      {h.closed ? (lang === 'fr' ? h.timeFr : h.timeEn) : h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: '12px 16px', background: '#f5f4f0', borderRadius: 8, fontSize: 12, color: '#888', lineHeight: 1.5 }}>
                {lang === 'fr'
                  ? '\u26a0\ufe0f Horaires sujets \u00e0 changement. Appelez pour confirmer avant un d\u00e9placement pour de gros travaux.'
                  : '\u26a0\ufe0f Hours subject to change. Call to confirm before dropping off for major work.'}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: 22, fontWeight: 300, color: '#0a0a0a', fontFamily: SERIF, marginBottom: 20 }}>
                {lang === 'fr' ? 'Nous trouver' : 'Find us'}
              </h2>
              <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #e8e3d8', height: 220 }}>
                <iframe
                  src="https://maps.google.com/maps?q=144+Ch+Freeman+Gatineau+QC+J8Z+2B4&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={lang === 'fr' ? 'Carte Dynamik Performance' : 'Dynamik Performance map'}
                />
              </div>
              <a
                href="https://maps.google.com/?q=144+Ch+Freeman+Gatineau+QC+J8Z+2B4"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', marginTop: 10, fontSize: 12, color: ACCENT, fontWeight: 600, textDecoration: 'none' }}
              >
                {lang === 'fr' ? 'Ouvrir dans Google Maps \u2192' : 'Open in Google Maps \u2192'}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer shop={shop} lang={lang} />

      <style>{`
        @media (max-width: 640px) {
          .contact-cards { grid-template-columns: 1fr !important; }
          .hours-map-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
