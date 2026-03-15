'use client';

import { useState, useEffect } from 'react';
import { shops } from '@/lib/shops';
import { Lang } from '@/lib/i18n';
import MegaNav from '@/components/shared/MegaNav';
import Footer from '@/components/shared/Footer';

const shop = shops.dynamik;
const ACCENT = '#2563eb';
const SERIF = 'var(--font-cormorant), Georgia, serif';

const milestones = [
  { year: '1999', descFr: 'Fondation de Dynamik Performance par Steve Jean-Baptiste', descEn: 'Dynamik Performance founded by Steve Jean-Baptiste' },
  { year: '2005', descFr: 'Certification concessionnaire Piaggio / Vespa officiel pour l\u2019Outaouais', descEn: 'Official Piaggio / Vespa dealer certification for the Outaouais region' },
  { year: '2012', descFr: 'Adh\u00e9sion AMO Moto — Association des motocyclistes organisés', descEn: 'AMO Moto membership — Association des motocyclistes organisés' },
  { year: '2026', descFr: 'Plus de 27 ans d\u2019expertise et toujours le même atelier de confiance', descEn: 'Over 27 years of expertise and still the same trusted shop' },
];

const services = [
  { icon: '🔧', labelFr: 'R\u00e9paration toutes marques', labelEn: 'All-brand repair' },
  { icon: '⚙️', labelFr: 'Entretien & inspection', labelEn: 'Maintenance & inspection' },
  { icon: '🛵', labelFr: 'Vente Vespa / Piaggio', labelEn: 'Vespa / Piaggio sales' },
  { icon: '❄️', labelFr: 'Entreposage hivernal', labelEn: 'Winter storage' },
  { icon: '🚛', labelFr: 'Remorquage', labelEn: 'Towing' },
  { icon: '🏎️', labelFr: 'Modifications customs', labelEn: 'Custom modifications' },
];

export default function DynamikAboutPage() {
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
      <section style={{ paddingTop: 100, padding: '100px 24px 72px', background: '#f5f4f0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <nav style={{ fontSize: 12, color: '#888', marginBottom: 32 }}>
            <a href="/dynamik" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 600 }}>
              Dynamik Performance
            </a>
            <span style={{ margin: '0 8px', color: '#ccc' }}>/</span>
            <span>{lang === 'fr' ? '\u00c0 propos' : 'About'}</span>
          </nav>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>
            {lang === 'fr' ? '\u00c0 PROPOS' : 'ABOUT US'}
          </p>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 60px)',
              fontWeight: 300,
              color: '#0a0a0a',
              fontFamily: SERIF,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            {lang === 'fr'
              ? 'Expert moto\u00a0\u2014\u00a0depuis\u00a01999.'
              : 'Motorcycle expert\u00a0\u2014\u00a0since\u00a01999.'}
          </h1>
          <p style={{ fontSize: 17, color: '#555', lineHeight: 1.7, maxWidth: 600 }}>
            {lang === 'fr'
              ? "Dynamik Performance, c'est Steve Jean-Baptiste et 27 ans de passion pour la m\u00e9canique moto. Concessionnaire officiel Vespa et Piaggio pour l'Outaouais. Un atelier \u00e0 taille humaine o\u00f9 votre moto est trait\u00e9e avec soin."
              : "Dynamik Performance is Steve Jean-Baptiste and 27 years of passion for motorcycle mechanics. Official Vespa and Piaggio dealer for the Outaouais. A human-scale shop where your motorcycle is treated with care."}
          </p>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section style={{ padding: '56px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { icon: '🛵', label: 'Vespa / Piaggio' },
              { icon: '🏅', label: lang === 'fr' ? 'Depuis 1999' : 'Since 1999' },
              { icon: '⚙️', label: 'AMO Moto' },
              { icon: '🇨🇦', label: lang === 'fr' ? 'Gatineau, QC' : 'Gatineau, QC' },
            ].map(b => (
              <div
                key={b.icon}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: `${ACCENT}08`,
                  border: `1px solid ${ACCENT}25`,
                  borderRadius: 100,
                  padding: '10px 20px',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#0a0a0a',
                }}
              >
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section style={{ padding: '64px 24px', background: '#fafaf8' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="story-grid">
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>
              {lang === 'fr' ? 'L\u2019HISTOIRE' : 'THE STORY'}
            </p>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 300, color: '#0a0a0a', fontFamily: SERIF, lineHeight: 1.1, marginBottom: 20 }}>
              {lang === 'fr' ? 'Un atelier bâti sur la confiance.' : 'A shop built on trust.'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75 }}>
                {lang === 'fr'
                  ? "En 1999, Steve Jean-Baptiste ouvre Dynamik Performance avec une vision simple\u00a0: offrir une m\u00e9canique moto expertement ex\u00e9cut\u00e9e, \u00e0 un prix juste, avec un service honnête."
                  : "In 1999, Steve Jean-Baptiste opened Dynamik Performance with a simple vision: offer expertly executed motorcycle mechanics, at a fair price, with honest service."}
              </p>
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75 }}>
                {lang === 'fr'
                  ? "Aujourd'hui, Dynamik Performance est le concessionnaire Vespa et Piaggio officiel pour l'Outaouais. Steve et son \u00e9quipe entretiennent et r\u00e9parent toutes les marques, mais leur expertise Vespa est reconnue dans toute la r\u00e9gion."
                  : "Today, Dynamik Performance is the official Vespa and Piaggio dealer for the Outaouais. Steve and his team service and repair all brands, but their Vespa expertise is recognized across the region."}
              </p>
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75 }}>
                {lang === 'fr'
                  ? "Petit atelier, grande qualit\u00e9. La plupart de nos clients viennent de bouche-\u00e0-oreille. Quand la m\u00e9canique est bien faite, les clients reviennent."
                  : "Small shop, high quality. Most of our clients come through word of mouth. When the mechanics are done right, customers come back."}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 20 }}>
              {lang === 'fr' ? 'CHRONOLOGIE' : 'TIMELINE'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {milestones.map((m, i) => (
                <div key={m.year} style={{ display: 'flex', gap: 20, paddingBottom: i < milestones.length - 1 ? 24 : 0, position: 'relative' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{ width: 36, height: 36, background: ACCENT, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', flexShrink: 0 }}>
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div style={{ width: 2, flex: 1, background: '#e8e3d8', marginTop: 6 }} />
                    )}
                  </div>
                  <div style={{ paddingTop: 6 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>{m.year}</p>
                    <p style={{ fontSize: 13, color: '#555', lineHeight: 1.5 }}>
                      {lang === 'fr' ? m.descFr : m.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: '64px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: '#0a0a0a', fontFamily: SERIF, marginBottom: 32 }}>
            {lang === 'fr' ? 'Ce qu\u2019on fait.' : 'What we do.'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }} className="services-grid">
            {services.map(s => (
              <div
                key={s.icon}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  background: '#f5f4f0',
                  border: '1px solid #e8e3d8',
                  borderRadius: 10,
                  padding: '14px 16px',
                }}
              >
                <span style={{ fontSize: 22, flexShrink: 0 }}>{s.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#0a0a0a' }}>
                  {lang === 'fr' ? s.labelFr : s.labelEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '64px 24px', background: '#f5f4f0', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: '#0a0a0a', fontFamily: SERIF, marginBottom: 16 }}>
            {lang === 'fr' ? 'R\u00e9servez votre service.' : 'Book your service.'}
          </h2>
          <p style={{ fontSize: 15, color: '#555', marginBottom: 28 }}>
            144 Ch. Freeman, Gatineau, QC J8Z 2B4
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:8197729444" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: ACCENT, color: '#fff', padding: '13px 28px', borderRadius: 100, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
              📞 819-772-9444
            </a>
            <a href="/dynamik/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ffffff', border: '1px solid #e8e3d8', color: '#0a0a0a', padding: '13px 28px', borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
              {lang === 'fr' ? 'Heures & adresse' : 'Hours & address'} →
            </a>
          </div>
        </div>
      </section>

      <Footer shop={shop} lang={lang} />

      <style>{`
        @media (max-width: 640px) {
          .story-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
