'use client';

import { useState, useEffect } from 'react';
import { shops } from '@/lib/shops';
import { Lang } from '@/lib/i18n';
import MegaNav from '@/components/shared/MegaNav';
import Footer from '@/components/shared/Footer';

const shop = shops.radikal;
const ACCENT = '#9e8a5a';
const SERIF = 'var(--font-cormorant), Georgia, serif';

// ─── PROMO DATA ────────────────────────────────────────────────────────────────
// To update for a new season: edit the dates, descriptions, and CTAs below.
// Each promo can be toggled active/inactive with the `active` flag.
// ──────────────────────────────────────────────────────────────────────────────
const promos = [
  {
    id: 'free-inspection',
    active: true,
    icon: '🔍',
    badgeFr: 'OFFRE PERMANENTE',
    badgeEn: 'PERMANENT OFFER',
    titleFr: 'Inspection complète gratuite',
    titleEn: 'Free Full Inspection',
    datesFr: 'Valide toute l\u2019année — sur rendez-vous',
    datesEn: 'Valid year-round — by appointment',
    descFr: 'Apportez votre véhicule et repartez avec un rapport complet de 30 points — sans frais. Notre technician inspecte votre moto, VTT, motocross ou motoneige de A à Z.',
    descEn: 'Bring your vehicle and leave with a complete 30-point report — at no charge. Our technician inspects your motorcycle, ATV, motocross or snowmobile from A to Z.',
    includedFr: [
      'Inspection moteur et transmission',
      'Contrôle freins avant et arrière',
      'Vérification suspension et direction',
      'Inspection électronique et éclairage',
      'État des pneus et pression',
      'Rapport écrit 30 points',
      'Recommandations de service',
    ],
    includedEn: [
      'Engine and transmission inspection',
      'Front and rear brake check',
      'Suspension and steering check',
      'Electronics and lighting inspection',
      'Tire condition and pressure',
      'Written 30-point report',
      'Service recommendations',
    ],
    priceFr: 'GRATUIT',
    priceEn: 'FREE',
    ctaFr: 'Prendre rendez-vous',
    ctaEn: 'Book an Appointment',
    ctaHref: '/radikal/contact',
    highlight: true,
  },
  {
    id: 'spring-tuneup',
    active: true,
    icon: '🌿',
    badgeFr: 'SPÉCIAL PRINTEMPS',
    badgeEn: 'SPRING SPECIAL',
    titleFr: 'Mise au point printanière',
    titleEn: 'Spring Tune-Up Special',
    datesFr: '1ᵉʳ avril — 30 juin 2026',
    datesEn: 'April 1 — June 30, 2026',
    descFr: 'Remettez votre powersports en condition optimale pour la saison. Vidange, freins, suspension et inspection complète à prix réduit. Disponible pour motos, VTT, UTV et motocross.',
    descEn: 'Get your powersports in peak condition for the season. Oil change, brakes, suspension and full inspection at a reduced price. Available for motorcycles, ATVs, UTVs and motocross.',
    includedFr: [
      'Vidange d\u2019huile moteur + filtre',
      'Inspection freins (avant + arrière)',
      'Réglage et lubrification de chaîne',
      'Contrôle suspension',
      'Vérification des pneus',
      'Inspection électronique complète',
    ],
    includedEn: [
      'Engine oil change + filter',
      'Brake inspection (front + rear)',
      'Chain adjustment and lubrication',
      'Suspension check',
      'Tire inspection',
      'Full electronics inspection',
    ],
    priceFr: 'À partir de 149 $',
    priceEn: 'Starting at $149',
    ctaFr: 'Réserver ce service',
    ctaEn: 'Book This Service',
    ctaHref: '/radikal/contact',
    highlight: false,
  },
  {
    id: 'fox-racing-sale',
    active: true,
    icon: '🦊',
    badgeFr: 'VENTE SAISONNIÈRE',
    badgeEn: 'SEASONAL SALE',
    titleFr: 'Vente printemps Fox Racing',
    titleEn: 'Fox Racing Spring Sale',
    datesFr: 'Avril — juin 2026 · Stocks limités',
    datesEn: 'April — June 2026 · Limited stock',
    descFr: 'Nouvelle collection printemps Fox Racing maintenant en boutique. Casques, maillots, pantalons, gants et bottes — renouvellement de stock complet. Revendeur autorisé Fox Racing pour Gatineau.',
    descEn: 'New Fox Racing spring collection now in store. Helmets, jerseys, pants, gloves and boots — full stock refresh. Authorized Fox Racing dealer for Gatineau.',
    includedFr: [
      'Casques Fox V3/V1 — nouvelle collection',
      'Maillots & pantalons 2026',
      'Gants Dirtpaw et Ranger',
      'Bottes Tech 7 et Comp Y',
      'Protections dorsales et thoraciques',
      'Tenues ATV et Enduro',
    ],
    includedEn: [
      'Fox V3/V1 helmets — new collection',
      '2026 jerseys & pants',
      'Dirtpaw and Ranger gloves',
      'Tech 7 and Comp Y boots',
      'Back and chest protectors',
      'ATV and Enduro kits',
    ],
    priceFr: 'Prix de saison',
    priceEn: 'Season pricing',
    ctaFr: 'Voir la boutique Fox Racing',
    ctaEn: 'See Fox Racing Shop',
    ctaHref: '/radikal/fox-racing',
    highlight: false,
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
    descFr: 'Entreposez votre powersports cet hiver en toute sécurité. Réservez avant le 31 octobre et profitez du tarif hâtif. Valide pour motos, VTT, motocross, motoneige et bateaux.',
    descEn: 'Store your powersports safely this winter. Book before October 31 and get the early bird rate. Valid for motorcycles, ATVs, motocross, snowmobiles and boats.',
    includedFr: [
      'Entreposage climatisé sécurisé (nov. à avr.)',
      'Préparation à l\u2019hivernage incluse',
      'Inspection au retrait au printemps',
      'Couverture anti-poussière incluse',
      'Accès contrôlé 24h/7j',
      'Valide pour tous types de véhicules',
    ],
    includedEn: [
      'Climate-controlled secure storage (Nov to Apr)',
      'Winterization prep included',
      'Inspection at spring pickup',
      'Dust cover included',
      'Controlled access 24/7',
      'Valid for all vehicle types',
    ],
    priceFr: '20 % de rabais hâtif',
    priceEn: '20% early bird discount',
    ctaFr: 'Réserver mon espace',
    ctaEn: 'Reserve My Spot',
    ctaHref: '/radikal/contact',
    highlight: false,
  },
];

export default function RadikalPromotionsPage() {
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
            <a href="/radikal" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 600 }}>
              Radikal Motosport
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
              ? 'Inspection gratuite toute l\u2019année, mises au point printanières, vente Fox Racing et entreposage hivernal à tarif avantageux.'
              : 'Free inspection year-round, spring tune-ups, Fox Racing sale and winter storage at special rates.'}
          </p>
        </div>
      </section>

      {/* ── POLICE TRUST MINI-STRIP ── */}
      <div
        style={{
          background: '#0f1a2e',
          padding: '14px 24px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 13, color: '#ccc', margin: 0 }}>
          <span style={{ color: ACCENT, fontWeight: 700 }}>🚔 </span>
          {lang === 'fr'
            ? 'Partenaire officiel pour l\u2019entretien des Harley-Davidson de flotte policière — fiabilité institutionnelle.'
            : 'Official partner for police fleet Harley-Davidson maintenance — institutional reliability.'}
        </p>
      </div>

      {/* ── PROMO CARDS ── */}
      <section style={{ padding: '72px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
          {activePromos.map((promo) => (
            <PromoCard key={promo.id} promo={promo} lang={lang} accent={ACCENT} serif={SERIF} />
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ padding: '64px 24px', background: '#0f1a2e', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>
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
            {lang === 'fr' ? 'Obtenez votre soumission.' : 'Get your free quote.'}
          </h2>
          <p style={{ fontSize: 15, color: '#aaa', marginBottom: 32 }}>
            {lang === 'fr'
              ? 'Eric et son équipe répondent sous 24h. Appelez ou envoyez-nous un message.'
              : 'Eric and his team respond within 24h. Call or send us a message.'}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:8195616686"
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
              📞 819-561-6686
            </a>
            <a
              href="/radikal/contact"
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
              {lang === 'fr' ? 'Formulaire de soumission' : 'Quote Request Form'} →
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
        boxShadow: promo.highlight ? `0 4px 24px ${accent}30` : '0 1px 4px rgba(0,0,0,0.05)',
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
          {lang === 'fr' ? '★ OFFRE PHARE' : '★ SIGNATURE OFFER'}
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
                  background: `${accent}12`,
                  border: `1px solid ${accent}30`,
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
