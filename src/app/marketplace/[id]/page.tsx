'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Lang } from '@/lib/i18n';
import Link from 'next/link';

interface Listing {
  id: string;
  title: string;
  description?: string;
  price: number;
  vehicle_type: string;
  make: string;
  model: string;
  year: number;
  mileage?: number;
  condition: string;
  tier: string;
  seller_name: string;
  seller_phone: string;
  image_url?: string;
  created_at: string;
}

const SERIF = 'var(--font-cormorant), Georgia, serif';

const CONDITION_LABELS: Record<string, { fr: string; en: string }> = {
  excellent: { fr: 'Excellent', en: 'Excellent' },
  good: { fr: 'Bon état', en: 'Good' },
  fair: { fr: 'Passable', en: 'Fair' },
  parts: { fr: 'Pour pièces', en: 'Parts only' },
};

const TIER_STYLES: Record<string, { bg: string; color: string; labelFr: string; labelEn: string; descFr: string; descEn: string }> = {
  standard: { bg: '#f5f4f0', color: '#555', labelFr: 'Standard', labelEn: 'Standard', descFr: 'Annonce standard', descEn: 'Standard listing' },
  premium: { bg: '#eff6ff', color: '#2563eb', labelFr: 'Premium', labelEn: 'Premium', descFr: 'Annonce en vedette', descEn: 'Featured listing' },
  certified: { bg: '#fef9c3', color: '#92400e', labelFr: 'Certifié ✓', labelEn: 'Certified ✓', descFr: 'Inspecté par un mécanicien certifié', descEn: 'Inspected by a certified mechanic' },
};

function formatPrice(p: number) {
  return p.toLocaleString('fr-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
}

export default function ListingDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [lang, setLang] = useState<Lang>('fr');
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('moto-lang') as Lang | null;
    if (saved === 'en') setLang('en');
  }, []);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/marketplace/${id}`)
      .then(r => r.json())
      .then(data => {
        if (data.listing) setListing(data.listing);
        else setNotFound(true);
        setLoading(false);
      })
      .catch(() => { setNotFound(true); setLoading(false); });
  }, [id]);

  const handleLangToggle = (l: Lang) => {
    setLang(l);
    localStorage.setItem('moto-lang', l);
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#888', fontSize: 15 }}>{lang === 'fr' ? 'Chargement...' : 'Loading...'}</p>
      </div>
    );
  }

  if (notFound || !listing) {
    return (
      <div style={{ minHeight: '100vh', background: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>🔍</div>
        <h1 style={{ fontFamily: SERIF, fontSize: 32, fontWeight: 300, color: '#0a0a0a', marginBottom: 12 }}>
          {lang === 'fr' ? 'Annonce introuvable.' : 'Listing not found.'}
        </h1>
        <p style={{ color: '#888', marginBottom: 24 }}>
          {lang === 'fr' ? 'Cette annonce a peut-être été vendue ou supprimée.' : 'This listing may have been sold or removed.'}
        </p>
        <Link href="/marketplace" style={{ background: '#0a0a0a', color: '#fff', padding: '12px 28px', borderRadius: 100, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
          {lang === 'fr' ? '← Retour aux annonces' : '← Back to listings'}
        </Link>
      </div>
    );
  }

  const tier = TIER_STYLES[listing.tier] ?? TIER_STYLES.standard;
  const cond = CONDITION_LABELS[listing.condition];

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      {/* ── NAV ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e8e3d8', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link href="/marketplace" style={{ fontSize: 13, color: '#888', textDecoration: 'none' }}>
            ← {lang === 'fr' ? 'Retour aux annonces' : 'Back to listings'}
          </Link>
        </div>
        <button
          onClick={() => handleLangToggle(lang === 'fr' ? 'en' : 'fr')}
          style={{ fontSize: 12, fontWeight: 700, background: 'none', border: '1px solid #e8e3d8', borderRadius: 100, padding: '6px 14px', cursor: 'pointer', color: '#555' }}
        >
          {lang === 'fr' ? 'EN' : 'FR'}
        </button>
      </nav>

      <div style={{ paddingTop: 64, maxWidth: 900, margin: '0 auto', padding: '80px 24px 80px' }}>
        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 40, alignItems: 'start' }} className="listing-grid">
          {/* Left: image + details */}
          <div>
            {/* Image */}
            <div
              style={{
                height: 360, background: listing.image_url ? `url(${listing.image_url}) center/cover` : '#f5f4f0',
                borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 28, border: '1px solid #e8e3d8',
              }}
            >
              {!listing.image_url && <span style={{ fontSize: 72 }}>🏍️</span>}
            </div>

            {/* Tier badge */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
              <span style={{ background: tier.bg, color: tier.color, fontSize: 12, fontWeight: 700, padding: '5px 14px', borderRadius: 100 }}>
                {lang === 'fr' ? tier.labelFr : tier.labelEn}
              </span>
              <span style={{ background: '#f5f4f0', color: '#555', fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 100 }}>
                {lang === 'fr' ? cond?.fr : cond?.en}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 300, color: '#0a0a0a', fontFamily: SERIF, letterSpacing: '-0.02em', marginBottom: 10, lineHeight: 1.1 }}>
              {listing.title}
            </h1>
            <p style={{ fontSize: 15, color: '#555', marginBottom: 24 }}>
              {listing.year} {listing.make} {listing.model}
              {listing.mileage ? ` · ${listing.mileage.toLocaleString('fr-CA')} km` : ''}
            </p>

            {listing.description && (
              <div>
                <h2 style={{ fontSize: 16, fontWeight: 700, color: '#0a0a0a', marginBottom: 10 }}>
                  {lang === 'fr' ? 'Description' : 'Description'}
                </h2>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
                  {listing.description}
                </p>
              </div>
            )}

            {/* Certified inspection note */}
            {listing.tier === 'certified' && (
              <div style={{ marginTop: 24, padding: '16px 20px', background: '#fef9c3', border: '1px solid #fde68a', borderRadius: 10 }}>
                <p style={{ fontSize: 13, color: '#92400e', fontWeight: 600 }}>
                  ✓ {lang === 'fr' ? 'Ce véhicule a été inspecté par un mécanicien certifié chez Dynamik Performance ou Radikal Motosport.' : 'This vehicle has been inspected by a certified mechanic at Dynamik Performance or Radikal Motosport.'}
                </p>
              </div>
            )}
          </div>

          {/* Right: price + contact */}
          <div style={{ position: 'sticky', top: 80 }}>
            <div style={{ background: '#fafaf8', border: '1px solid #e8e3d8', borderRadius: 14, padding: '28px 24px' }}>
              <p style={{ fontSize: 32, fontWeight: 700, color: '#0a0a0a', fontFamily: SERIF, marginBottom: 4 }}>
                {formatPrice(listing.price)}
              </p>
              <p style={{ fontSize: 12, color: '#888', marginBottom: 24 }}>
                {lang === 'fr' ? 'Taxes en sus, si applicable' : 'Taxes extra if applicable'}
              </p>

              <a
                href={`tel:${listing.seller_phone.replace(/\D/g, '')}`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#0a0a0a', color: '#fff', padding: '14px', borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: 'none', marginBottom: 12, width: '100%', boxSizing: 'border-box' }}
              >
                📞 {listing.seller_phone}
              </a>

              <div style={{ background: '#fff', border: '1px solid #e8e3d8', borderRadius: 10, padding: '16px' }}>
                <p style={{ fontSize: 12, color: '#888', marginBottom: 4 }}>
                  {lang === 'fr' ? 'Vendeur' : 'Seller'}
                </p>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#0a0a0a' }}>
                  {listing.seller_name}
                </p>
              </div>

              <div style={{ marginTop: 16, padding: '12px 0', borderTop: '1px solid #e8e3d8' }}>
                <p style={{ fontSize: 12, color: '#888', lineHeight: 1.5 }}>
                  {lang === 'fr'
                    ? '💡 Besoin d\'une inspection avant l\'achat ? Rendez-vous chez Dynamik Performance (819-772-9444) ou Radikal Motosport (819-561-6686).'
                    : '💡 Need an inspection before buying? Visit Dynamik Performance (819-772-9444) or Radikal Motosport (819-561-6686).'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .listing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
