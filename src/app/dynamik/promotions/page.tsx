'use client';

import { useState, useEffect } from 'react';
import { shops } from '@/lib/shops';
import { Lang } from '@/lib/i18n';
import MegaNav from '@/components/shared/MegaNav';
import Footer from '@/components/shared/Footer';

const shop = shops.dynamik;
const ACCENT = '#2563eb';
const SERIF = 'var(--font-cormorant), Georgia, serif';

// ─── PROMO DATA ────────────────────────────────────────────────────────────────
// To update for a new season: edit the dates, descriptions, and CTAs below.
// Each promo can be toggled active/inactive with the `active` flag.
// ──────────────────────────────────────────────────────────────────────────────
const promos = [
  {
    id: 'spring-tuneup',
    active: true,
    icon: '🌿',
    badgeFr: 'SPÉCIAL PRINTEMPS',
    badgeEn: 'SPRING SPECIAL',
    titleFr: 'Mise au point printanière',
    titleEn: 'Spring Tune-Up Special',
    datesFr: '1\u1d49ʳ avril — 30 juin 2026',
    datesEn: 'April 1 — June 30, 2026',
    descFr: 'Préparez votre moto pour la saison. Vidange d\u2019huile, réglage chaîne, freins, pneus et inspection complète — tout inclus à tarif réduit.',
    descEn: 'Get your motorcycle ready for the season. Oil change, chain adjustment, brakes, tires and full inspection — all included at a reduced rate.',
    includedFr: [
      'Vidange d\u2019huile + filtre',
      'Réglage et lubrification de chaîne',
      'Inspection des freins (avant + arrière)',
      'Vérification des pneus et de la pression',
      'Contrôle électronique et éclairage',
      'Rapport d\u2019inspection 30 points',
    ],
    includedEn: [
      'Oil change + filter',
      'Chain adjustment and lubrication',
      'Brake inspection (front + rear)',
      'Tire check and pressure',
      'Electronics and lighting check',
      '30-point inspection report',
    ],
    priceFr: 'À partir de 149 $',
    priceEn: 'Starting at $149',
    ctaFr: 'Réserver ce service',
    ctaEn: 'Book This Service',
    ctaHref: '/dynamik/contact',
    highlight: true,
  },
  {
    id: 'vespa-financing',
    active: true,
    icon: '🛵',
    badgeFr: 'FINANCEMENT',
    badgeEn: 'FINANCING',
    titleFr: 'Financement Vespa à 0 %',
    titleEn: 'Vespa 0% Financing',
    datesFr: 'Offre en cours — valide sur modèles sélectionnés',
    datesEn: 'Ongoing offer — valid on selected models',
    descFr: 'Roulez maintenant, payez à votre rythme. Financement Piaggio Canada à 0 % sur 24 mois sur les modèles Sprint, Primavera et GTS. Sous réserve d\u2019approbation de crédit.',
    descEn: 'Ride now, pay your way. Piaggio Canada 0% financing for 24 months on Sprint, Primavera and GTS models. Subject to credit approval.',
    includedFr: [
      'Taux à 0 % sur 24 mois (Piaggio Canada)*',
      'Applicable\u00a0: Sprint 150, Primavera 150, GTS 300',
      'Partenaires\u00a0: TD Financement Auto · Desjardins · LendCare',
      'Préqualification sans engagement',
      'Réponse sous 24h',
    ],
    includedEn: [
      '0% rate for 24 months (Piaggio Canada)*',
      'Eligible: Sprint 150, Primavera 150, GTS 300',
      'Partners: TD Auto Finance · Desjardins · LendCare',
      'No-commitment pre-qualification',
      'Response within 24h',
    ],
    priceFr: '0 % sur 24 mois*',
    priceEn: '0% for 24 months*',
    ctaFr: 'Demander le financement',
    ctaEn: 'Apply for Financing',
    ctaHref: '/dynamik#financing',
    highlight: false,
    disclaimer: true,
  },
  {
    id: 'winter-storage',
    active: true,
    icon: '❄️',
    badgeFr: 'RÉSERVATION HÂTIVE',
    badgeEn: 'EARLY BOOKING',
    titleFr: 'Entreposage hivernal — tarif hâtif',
    titleEn: 'Winter Storage — Early Rate',
    datesFr: 'Réservation\u00a0: 1ᵉʳ août — 31 octobre 2026',
    datesEn: 'Book by: August 1 — October 31, 2026',
    descFr: 'Protégez votre moto pendant l\u2019hiver avec notre entreposage climatisé et sécurisé. Réservez avant le 31 octobre et économisez 20 % sur le tarif régulier.',
    descEn: 'Protect your motorcycle through winter with our climate-controlled, secure storage. Book before October 31 and save 20% off the regular rate.',
    includedFr: [
      'Entreposage climatisé sécurisé (nov. à avr.)',
      'Préparation à l\u2019hivernage incluse',
      'Inspection au retrait au printemps',
      'Couverture anti-poussière incluse',
      'Accès contrôlé 24h/7j',
    ],
    includedEn: [
      'Climate-controlled secure storage (Nov to Apr)',
      'Winterization prep included',
      'Inspection at spring pickup',
      'Dust cover included',
      'Controlled access 24/7',
    ],
    priceFr: '20 % de rabais hâtif',
    priceEn: '20% early bird discount',
    ctaFr: 'Réserver mon espace',
    ctaEn: 'Reserve My Spot',
    ctaHref: '/dynamik/contact',
    highlight: false,
  },
];

export default function DynamikPromotionsPage() {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('moto-lang') as Lang | null;
    if (saved === 'en') setLang('en');
  }, []);

  const handleLangToggle = (l: Lang) => {
    setLang(l);
    localStorage.setItem('moto-lang', l);
  };

  const activePromos = promos.filter(p => p.active);

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <MegaNav shop={shop} lang={lang} onToggleLang={handleLangToggle} />

      {/* ── HERO ── */}
      <section style={{ paddingTop: 100, padding: '100px 24px 64px', background: '#f5f4f0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <nav style={{ fontSize: 12, color: '#888', marginBottom: 32 }}>
            <a href="/dynamik" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 600 }}>
              Dynamik Performance
            </a>
            <span style={{ margin: '0 8px', color: '#ccc' }}>/</span>
            <span>{lang === 'fr' ? 'Promotions' : 'Promotions'}</span>
          </nav>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>
            {lang === 'fr' ? 'OFFRES SAISONNIÈRES' : 'SEASONAL OFFERS'}
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
            {lang === 'fr' ? 'Promotions en cours.' : 'Current Promotions.'}
          </h1>
          <p style={{ fontSize: 17, color: '#555', lineHeight: 1.7, maxWidth: 560 }}>
            {lang === 'fr'
              ? 'Profitez de nos offres saisonnières — mises au point, financement Vespa et entreposage hivernal à tarif avantageux.'
              : 'Take advantage of our seasonal offers — tune-ups, Vespa financing and winter storage at special rates.'}
          </p>
        </div>
      </section>

      {/* ── PROMO CARDS ── */}
      <section style={{ padding: '72px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
          {activePromos.map((promo) => (
            <PromoCard key={promo.id} promo={promo} lang={lang} accent={ACCENT} serif={SERIF} />
          ))}
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section style={{ padding: '0 24px 48px', background: '#ffffff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 12, color: '#aaa', lineHeight: 1.6 }}>
            {lang === 'fr'
              ? '* Taux de financement sous réserve d\u2019approbation de crédit. Offre valable sur modèles sélectionnés. Les promotions peuvent prendre fin sans préavis. Contactez-nous pour les conditions complètes.'
              : '* Financing rates subject to credit approval. Offer valid on selected models. Promotions may end without notice. Contact us for full terms.'}
          </p>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ padding: '64px 24px', background: '#0f1a2e', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9e8a5a', marginBottom: 12 }}>
            {lang === 'fr' ? 'QUESTIONS ?' : 'QUESTIONS?'}
          </p>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 42px)',
              fontWeight: 300,
              color: '#ffffff',
              fontFamily: SERIF,
              marginBottom: 16,
            }}
          >
            {lang === 'fr' ? 'Parlons de votre projet.' : 'Let\u2019s talk about your project.'}
          </h2>
          <p style={{ fontSize: 15, color: '#aaa', marginBottom: 32 }}>
            {lang === 'fr'
              ? 'Steve et son équipe répondent sous 24h. Appelez ou envoyez-nous un message.'
              : 'Steve and his team respond within 24h. Call or send us a message.'}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:8197729444"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: ACCENT,
                color: '#fff',
                padding: '13px 28px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              📞 819-772-9444
            </a>
            <a
              href="/dynamik/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff',
                padding: '13px 28px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              {lang === 'fr' ? 'Formulaire en ligne' : 'Online Form'} →
            </a>
          </div>
        </div>
      </section>

      <Footer shop={shop} lang={lang} />

      <style>{`
        @media (max-width: 600px) {
          .promo-card-body { padding: 24px 20px 28px !important; }
          .promo-included-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

// ─── PROMO CARD COMPONENT ──────────────────────────────────────────────────────
type Promo = typeof promos[0];

function PromoCard({ promo, lang, accent, serif }: { promo: Promo; lang: Lang; accent: string; serif: string }) {
  return (
    <div
      style={{
        border: promo.highlight ? `2px solid ${accent}` : '1px solid #e8e3d8',
        borderRadius: 12,
        overflow: 'hidden',
        background: '#ffffff',
        boxShadow: promo.highlight ? `0 4px 24px ${accent}15` : '0 1px 4px rgba(0,0,0,0.05)',
        position: 'relative',
      }}
    >
      {/* Highlight ribbon */}
      {promo.highlight && (
        <div
          style={{
            background: accent,
            color: '#fff',
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textAlign: 'center',
            padding: '6px 0',
          }}
        >
          {lang === 'fr' ? '★ OFFRE POPULAIRE' : '★ POPULAR OFFER'}
        </div>
      )}

      <div style={{ padding: '32px 36px 36px' }} className="promo-card-body">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 24 }}>{promo.icon}</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: accent,
                  background: `${accent}10`,
                  border: `1px solid ${accent}25`,
                  padding: '3px 10px',
                  borderRadius: 100,
                }}
              >
                {lang === 'fr' ? promo.badgeFr : promo.badgeEn}
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 300,
                color: '#0a0a0a',
                fontFamily: serif,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {lang === 'fr' ? promo.titleFr : promo.titleEn}
            </h2>
          </div>

          {/* Price tag */}
          <div
            style={{
              background: '#f5f4f0',
              border: '1px solid #e8e3d8',
              borderRadius: 10,
              padding: '12px 20px',
              textAlign: 'center',
              flexShrink: 0,
            }}
          >
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888', margin: '0 0 4px' }}>
              {lang === 'fr' ? 'OFFRE' : 'OFFER'}
            </p>
            <p style={{ fontSize: 18, fontWeight: 700, color: accent, margin: 0, fontFamily: serif }}>
              {lang === 'fr' ? promo.priceFr : promo.priceEn}
            </p>
          </div>
        </div>

        {/* Date */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: 13, color: '#888' }}>📅</span>
          <span style={{ fontSize: 13, color: '#888', fontStyle: 'italic' }}>
            {lang === 'fr' ? promo.datesFr : promo.datesEn}
          </span>
        </div>

        {/* Description */}
        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, marginBottom: 24 }}>
          {lang === 'fr' ? promo.descFr : promo.descEn}
        </p>

        {/* Included items */}
        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: 12 }}>
            {lang === 'fr' ? 'CE QUI EST INCLUS' : "WHAT'S INCLUDED"}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px 24px' }} className="promo-included-grid">
            {(lang === 'fr' ? promo.includedFr : promo.includedEn).map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#333' }}>
                <span style={{ color: accent, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={promo.ctaHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: accent,
            color: '#fff',
            padding: '13px 28px',
            borderRadius: 100,
            fontSize: 14,
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          {lang === 'fr' ? promo.ctaFr : promo.ctaEn} →
        </a>
      </div>
    </div>
  );
}
