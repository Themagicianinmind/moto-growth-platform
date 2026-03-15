'use client';

import { useState, useEffect, useCallback } from 'react';
import { Lang } from '@/lib/i18n';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Listing {
  id: string;
  title: string;
  price: number;
  vehicle_type: string;
  make: string;
  model: string;
  year: number;
  mileage?: number;
  condition: string;
  tier: string;
  image_url?: string;
  created_at: string;
}

// ─── Tokens ──────────────────────────────────────────────────────────────────
const SERIF = 'var(--font-cormorant), Georgia, serif';

const VEHICLE_TYPES: { value: string; labelFr: string; labelEn: string }[] = [
  { value: '', labelFr: 'Tous les types', labelEn: 'All types' },
  { value: 'motorcycle', labelFr: 'Moto', labelEn: 'Motorcycle' },
  { value: 'scooter', labelFr: 'Scooter', labelEn: 'Scooter' },
  { value: 'atv', labelFr: 'VTT', labelEn: 'ATV' },
  { value: 'utv', labelFr: 'UTV / Side-by-side', labelEn: 'UTV / Side-by-side' },
  { value: 'motocross', labelFr: 'Motocross / Dirt', labelEn: 'Motocross / Dirt' },
  { value: 'snowmobile', labelFr: 'Motoneige', labelEn: 'Snowmobile' },
  { value: 'boat', labelFr: 'Bateau / Marine', labelEn: 'Boat / Marine' },
  { value: 'other', labelFr: 'Autre', labelEn: 'Other' },
];

const CONDITION_LABELS: Record<string, { fr: string; en: string }> = {
  excellent: { fr: 'Excellent', en: 'Excellent' },
  good: { fr: 'Bon état', en: 'Good' },
  fair: { fr: 'Passable', en: 'Fair' },
  parts: { fr: 'Pour pièces', en: 'Parts only' },
};

const TIER_STYLES: Record<string, { bg: string; color: string; labelFr: string; labelEn: string }> = {
  standard: { bg: '#f5f4f0', color: '#888', labelFr: 'Standard', labelEn: 'Standard' },
  premium: { bg: '#eff6ff', color: '#2563eb', labelFr: 'Premium', labelEn: 'Premium' },
  certified: { bg: '#fef9c3', color: '#92400e', labelFr: 'Certifié', labelEn: 'Certified' },
};

function formatPrice(p: number) {
  return p.toLocaleString('fr-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function MarketplacePage() {
  const [lang, setLang] = useState<Lang>('fr');
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [vehicleType, setVehicleType] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('moto-lang') as Lang | null;
    if (saved === 'en') setLang('en');
  }, []);

  const fetchListings = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (vehicleType) params.set('vehicle_type', vehicleType);
    if (maxPrice) params.set('max_price', maxPrice);
    const res = await fetch(`/api/marketplace?${params.toString()}`);
    const json = await res.json();
    setListings(json.listings ?? []);
    setLoading(false);
  }, [vehicleType, maxPrice]);

  useEffect(() => { fetchListings(); }, [fetchListings]);

  const handleLangToggle = (l: Lang) => {
    setLang(l);
    localStorage.setItem('moto-lang', l);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>

      {/* ── NAV ── */}
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e8e3d8', padding: '0 24px', height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Link href="/" style={{ fontSize: 13, color: '#888', textDecoration: 'none' }}>
            ← {lang === 'fr' ? 'Accueil' : 'Home'}
          </Link>
          <span style={{ color: '#e8e3d8' }}>|</span>
          <span style={{ fontSize: 15, fontWeight: 700, color: '#0a0a0a', fontFamily: SERIF }}>
            Moto Marketplace
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link
            href="/marketplace/sell"
            style={{
              background: '#0a0a0a', color: '#fff', padding: '8px 18px',
              borderRadius: 100, fontSize: 13, fontWeight: 700, textDecoration: 'none',
            }}
          >
            {lang === 'fr' ? '+ Publier une annonce' : '+ Post a listing'}
          </Link>
          <button
            onClick={() => handleLangToggle(lang === 'fr' ? 'en' : 'fr')}
            style={{ fontSize: 12, fontWeight: 700, background: 'none', border: '1px solid #e8e3d8', borderRadius: 100, padding: '6px 14px', cursor: 'pointer', color: '#555' }}
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          paddingTop: 64, padding: '64px 24px 48px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9e8a5a', marginBottom: 12, marginTop: 32 }}>
          {lang === 'fr' ? 'GATINEAU · OUTAOUAIS' : 'GATINEAU · OUTAOUAIS'}
        </p>
        <h1
          style={{
            fontSize: 'clamp(28px, 5vw, 54px)', fontWeight: 300,
            color: '#ffffff', fontFamily: SERIF, letterSpacing: '-0.02em',
            lineHeight: 1.05, marginBottom: 14,
          }}
        >
          {lang === 'fr' ? 'Achetez & vendez\nvotre moto.' : 'Buy & sell\nyour motorcycle.'}
        </h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
          {lang === 'fr'
            ? 'Annonces vérifiées par nos boutiques locales. Inspection optionnelle chez Dynamik ou Radikal.'
            : 'Listings verified by our local shops. Optional inspection at Dynamik or Radikal.'}
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { icon: '✅', labelFr: 'Annonces locales', labelEn: 'Local listings' },
            { icon: '🔧', labelFr: 'Inspection dispo', labelEn: 'Inspection available' },
            { icon: '🛡️', labelFr: 'Vendeurs vérifiés', labelEn: 'Verified sellers' },
          ].map(b => (
            <div key={b.icon} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 100, padding: '8px 16px', fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
              <span>{b.icon}</span>
              <span>{lang === 'fr' ? b.labelFr : b.labelEn}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section style={{ padding: '28px 24px', background: '#f5f4f0', borderBottom: '1px solid #e8e3d8' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {lang === 'fr' ? 'Type' : 'Type'}
            </label>
            <select
              value={vehicleType}
              onChange={e => setVehicleType(e.target.value)}
              style={{ fontSize: 13, padding: '8px 32px 8px 12px', borderRadius: 8, border: '1px solid #e8e3d8', background: '#fff', color: '#0a0a0a', cursor: 'pointer', appearance: 'none', minWidth: 160 }}
            >
              {VEHICLE_TYPES.map(t => (
                <option key={t.value} value={t.value}>
                  {lang === 'fr' ? t.labelFr : t.labelEn}
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {lang === 'fr' ? 'Prix max' : 'Max price'}
            </label>
            <select
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
              style={{ fontSize: 13, padding: '8px 32px 8px 12px', borderRadius: 8, border: '1px solid #e8e3d8', background: '#fff', color: '#0a0a0a', cursor: 'pointer', appearance: 'none', minWidth: 140 }}
            >
              <option value="">{lang === 'fr' ? 'Tous les prix' : 'All prices'}</option>
              <option value="2000">{'< 2 000 $'}</option>
              <option value="5000">{'< 5 000 $'}</option>
              <option value="10000">{'< 10 000 $'}</option>
              <option value="20000">{'< 20 000 $'}</option>
            </select>
          </div>
          <span style={{ fontSize: 13, color: '#888', marginLeft: 'auto' }}>
            {loading ? (lang === 'fr' ? 'Chargement...' : 'Loading...') : `${listings.length} ${lang === 'fr' ? 'annonce(s)' : 'listing(s)'}`}
          </span>
        </div>
      </section>

      {/* ── LISTINGS GRID ── */}
      <section style={{ padding: '40px 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#888', fontSize: 15 }}>
            {lang === 'fr' ? 'Chargement des annonces...' : 'Loading listings...'}
          </div>
        ) : listings.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 24px' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🏍️</div>
            <h2 style={{ fontSize: 24, fontWeight: 300, color: '#0a0a0a', fontFamily: SERIF, marginBottom: 12 }}>
              {lang === 'fr' ? 'Aucune annonce pour l\'instant.' : 'No listings yet.'}
            </h2>
            <p style={{ fontSize: 15, color: '#888', marginBottom: 24 }}>
              {lang === 'fr'
                ? 'Soyez le premier à publier une annonce dans la région.'
                : 'Be the first to post a listing in the region.'}
            </p>
            <Link
              href="/marketplace/sell"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '13px 28px', borderRadius: 100, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}
            >
              {lang === 'fr' ? '+ Publier une annonce' : '+ Post a listing'}
            </Link>
          </div>
        ) : (
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}
          >
            {listings.map(l => {
              const tier = TIER_STYLES[l.tier] ?? TIER_STYLES.standard;
              const cond = CONDITION_LABELS[l.condition];
              return (
                <Link key={l.id} href={`/marketplace/${l.id}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      background: '#ffffff', border: '1px solid #e8e3d8', borderRadius: 14,
                      overflow: 'hidden', transition: 'box-shadow 0.15s',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                  >
                    {/* Image */}
                    <div
                      style={{
                        height: 180, background: l.image_url ? `url(${l.image_url}) center/cover` : '#f5f4f0',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
                      }}
                    >
                      {!l.image_url && <span style={{ fontSize: 40 }}>🏍️</span>}
                      <span
                        style={{
                          position: 'absolute', top: 10, right: 10,
                          background: tier.bg, color: tier.color,
                          fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 100,
                        }}
                      >
                        {lang === 'fr' ? tier.labelFr : tier.labelEn}
                      </span>
                    </div>
                    {/* Info */}
                    <div style={{ padding: '16px 18px 18px' }}>
                      <p style={{ fontSize: 13, color: '#888', marginBottom: 4 }}>
                        {l.year} · {l.make} {l.model}
                        {l.mileage ? ` · ${l.mileage.toLocaleString('fr-CA')} km` : ''}
                      </p>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0a0a0a', fontFamily: SERIF, marginBottom: 8, lineHeight: 1.2 }}>
                        {l.title}
                      </h3>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0a' }}>
                          {formatPrice(l.price)}
                        </span>
                        <span style={{ fontSize: 11, color: '#888', background: '#f5f4f0', padding: '3px 10px', borderRadius: 100 }}>
                          {lang === 'fr' ? cond?.fr : cond?.en}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* ── SELL CTA STRIP ── */}
      <section style={{ padding: '48px 24px', background: '#0a0a0a', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 300, color: '#ffffff', fontFamily: SERIF, marginBottom: 12 }}>
          {lang === 'fr' ? 'Vous vendez votre moto ?' : 'Selling your motorcycle?'}
        </h2>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 24 }}>
          {lang === 'fr'
            ? 'Annonce Standard 25 $ · Premium 50 $ · Certifié 75 $ (inspection incluse)'
            : 'Standard listing $25 · Premium $50 · Certified $75 (inspection included)'}
        </p>
        <Link
          href="/marketplace/sell"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#9e8a5a', color: '#fff', padding: '13px 32px', borderRadius: 100, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}
        >
          {lang === 'fr' ? 'Publier mon annonce →' : 'Post my listing →'}
        </Link>
      </section>
    </div>
  );
}
