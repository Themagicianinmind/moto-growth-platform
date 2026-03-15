'use client';

import { useState, useEffect } from 'react';
import { Lang } from '@/lib/i18n';
import Link from 'next/link';

const SERIF = 'var(--font-cormorant), Georgia, serif';

const VEHICLE_TYPES = [
  { value: 'motorcycle', labelFr: 'Moto / Cruiser / Sport', labelEn: 'Motorcycle / Cruiser / Sport' },
  { value: 'scooter', labelFr: 'Scooter', labelEn: 'Scooter' },
  { value: 'atv', labelFr: 'VTT', labelEn: 'ATV' },
  { value: 'utv', labelFr: 'UTV / Side-by-side', labelEn: 'UTV / Side-by-side' },
  { value: 'motocross', labelFr: 'Motocross / Dirt', labelEn: 'Motocross / Dirt' },
  { value: 'snowmobile', labelFr: 'Motoneige', labelEn: 'Snowmobile' },
  { value: 'boat', labelFr: 'Bateau / Marine', labelEn: 'Boat / Marine' },
  { value: 'other', labelFr: 'Autre', labelEn: 'Other' },
];

const CONDITIONS = [
  { value: 'excellent', labelFr: 'Excellent — comme neuf', labelEn: 'Excellent — like new' },
  { value: 'good', labelFr: 'Bon état — quelques marques d\'usure', labelEn: 'Good — minor wear' },
  { value: 'fair', labelFr: 'Passable — nécessite entretien', labelEn: 'Fair — needs maintenance' },
  { value: 'parts', labelFr: 'Pour pièces seulement', labelEn: 'Parts only' },
];

const TIERS = [
  { value: 'standard', price: '25 $', labelFr: 'Standard', labelEn: 'Standard', descFr: 'Annonce 30 jours · Visible sur la marketplace', descEn: '30-day listing · Visible on marketplace', color: '#555', bg: '#f5f4f0' },
  { value: 'premium', price: '50 $', labelFr: 'Premium ⭐', labelEn: 'Premium ⭐', descFr: 'En vedette · Priorité dans les résultats · 60 jours', descEn: 'Featured · Priority results · 60 days', color: '#2563eb', bg: '#eff6ff' },
  { value: 'certified', price: '75 $', labelFr: 'Certifié 🔧', labelEn: 'Certified 🔧', descFr: 'Inspection mécanique incluse + badge Certifié · 90 jours', descEn: 'Mechanic inspection included + Certified badge · 90 days', color: '#92400e', bg: '#fef9c3' },
];

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 40 }, (_, i) => currentYear - i);

type FormState = {
  title: string; description: string; price: string; vehicleType: string;
  make: string; model: string; year: string; mileage: string; condition: string;
  tier: string; sellerName: string; sellerPhone: string; sellerEmail: string; imageUrl: string;
};

const defaultForm: FormState = {
  title: '', description: '', price: '', vehicleType: 'motorcycle',
  make: '', model: '', year: String(currentYear - 3), mileage: '', condition: 'good',
  tier: 'standard', sellerName: '', sellerPhone: '', sellerEmail: '', imageUrl: '',
};

export default function SellPage() {
  const [lang, setLang] = useState<Lang>('fr');
  const [form, setForm] = useState<FormState>(defaultForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('moto-lang') as Lang | null;
    if (saved === 'en') setLang('en');
  }, []);

  const handleLangToggle = (l: Lang) => {
    setLang(l);
    localStorage.setItem('moto-lang', l);
  };

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.title.trim() || !form.price || !form.make.trim() || !form.model.trim() || !form.sellerName.trim() || !form.sellerPhone.trim()) {
      setError(lang === 'fr' ? 'Veuillez remplir tous les champs obligatoires (*).' : 'Please fill in all required fields (*).');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/marketplace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title,
          description: form.description || undefined,
          price: parseInt(form.price),
          vehicleType: form.vehicleType,
          make: form.make,
          model: form.model,
          year: parseInt(form.year),
          mileage: form.mileage ? parseInt(form.mileage) : undefined,
          condition: form.condition,
          tier: form.tier,
          sellerName: form.sellerName,
          sellerPhone: form.sellerPhone,
          sellerEmail: form.sellerEmail || undefined,
          imageUrl: form.imageUrl || undefined,
          lang,
        }),
      });
      if (!res.ok) throw new Error('API error');
      setSubmitted(true);
    } catch {
      setError(lang === 'fr' ? 'Une erreur est survenue. Réessayez.' : 'An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '11px 14px', fontSize: 14, borderRadius: 8,
    border: '1px solid #ddd8cc', background: '#fff', color: '#0a0a0a',
    boxSizing: 'border-box', outline: 'none',
  };
  const labelStyle: React.CSSProperties = {
    fontSize: 12, fontWeight: 700, color: '#555', textTransform: 'uppercase',
    letterSpacing: '0.08em', marginBottom: 6, display: 'block',
  };

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', background: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
        <h1 style={{ fontFamily: SERIF, fontSize: 36, fontWeight: 300, color: '#0a0a0a', marginBottom: 12, textAlign: 'center' }}>
          {lang === 'fr' ? 'Annonce reçue !' : 'Listing received!'}
        </h1>
        <p style={{ fontSize: 15, color: '#555', textAlign: 'center', marginBottom: 8, maxWidth: 480 }}>
          {lang === 'fr'
            ? 'Votre annonce sera vérifiée et publiée dans les 24 heures. Vous recevrez un appel de confirmation de notre équipe.'
            : 'Your listing will be reviewed and published within 24 hours. Our team will call to confirm.'}
        </p>
        <p style={{ fontSize: 13, color: '#888', textAlign: 'center', marginBottom: 28 }}>
          {lang === 'fr'
            ? 'Le paiement est collecté lors de la confirmation téléphonique.'
            : 'Payment is collected during the phone confirmation.'}
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link href="/marketplace" style={{ background: '#0a0a0a', color: '#fff', padding: '12px 24px', borderRadius: 100, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            {lang === 'fr' ? 'Voir la marketplace →' : 'View marketplace →'}
          </Link>
          <button onClick={() => { setForm(defaultForm); setSubmitted(false); }} style={{ background: '#f5f4f0', color: '#0a0a0a', padding: '12px 24px', borderRadius: 100, fontSize: 14, fontWeight: 600, border: 'none', cursor: 'pointer' }}>
            {lang === 'fr' ? 'Nouvelle annonce' : 'New listing'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      {/* ── NAV ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e8e3d8', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/marketplace" style={{ fontSize: 13, color: '#888', textDecoration: 'none' }}>
          ← {lang === 'fr' ? 'Marketplace' : 'Marketplace'}
        </Link>
        <button onClick={() => handleLangToggle(lang === 'fr' ? 'en' : 'fr')} style={{ fontSize: 12, fontWeight: 700, background: 'none', border: '1px solid #e8e3d8', borderRadius: 100, padding: '6px 14px', cursor: 'pointer', color: '#555' }}>
          {lang === 'fr' ? 'EN' : 'FR'}
        </button>
      </nav>

      <div style={{ paddingTop: 64, maxWidth: 720, margin: '0 auto', padding: '80px 24px 80px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9e8a5a', marginBottom: 10 }}>
          {lang === 'fr' ? 'VENDRE MON VÉHICULE' : 'SELL MY VEHICLE'}
        </p>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 300, color: '#0a0a0a', fontFamily: SERIF, letterSpacing: '-0.02em', marginBottom: 8, lineHeight: 1.05 }}>
          {lang === 'fr' ? 'Publiez votre annonce.' : 'Post your listing.'}
        </h1>
        <p style={{ fontSize: 15, color: '#555', marginBottom: 40 }}>
          {lang === 'fr' ? 'Remplissez le formulaire — notre équipe vous contacte sous 24h.' : 'Fill out the form — our team contacts you within 24 hours.'}
        </p>

        <form onSubmit={handleSubmit}>

          {/* ── TIER SELECTION ── */}
          <div style={{ marginBottom: 32 }}>
            <p style={labelStyle}>{lang === 'fr' ? 'FORMULE *' : 'PLAN *'}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {TIERS.map(t => (
                <div
                  key={t.value}
                  onClick={() => setForm(prev => ({ ...prev, tier: t.value }))}
                  style={{
                    flex: 1, minWidth: 160, padding: '16px', borderRadius: 10, cursor: 'pointer',
                    border: form.tier === t.value ? `2px solid ${t.color}` : '2px solid #e8e3d8',
                    background: form.tier === t.value ? t.bg : '#fff',
                    transition: 'all 0.15s',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: t.color }}>
                      {lang === 'fr' ? t.labelFr : t.labelEn}
                    </span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: '#0a0a0a' }}>{t.price}</span>
                  </div>
                  <p style={{ fontSize: 11, color: '#888', lineHeight: 1.4 }}>
                    {lang === 'fr' ? t.descFr : t.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── VEHICLE INFO ── */}
          <div style={{ marginBottom: 28 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#0a0a0a', marginBottom: 16, paddingBottom: 8, borderBottom: '1px solid #e8e3d8' }}>
              {lang === 'fr' ? '1. Informations sur le véhicule' : '1. Vehicle information'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="form-grid">
              <div>
                <label style={labelStyle}>{lang === 'fr' ? 'TYPE *' : 'TYPE *'}</label>
                <select value={form.vehicleType} onChange={set('vehicleType')} style={{ ...inputStyle, cursor: 'pointer' }}>
                  {VEHICLE_TYPES.map(v => <option key={v.value} value={v.value}>{lang === 'fr' ? v.labelFr : v.labelEn}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>{lang === 'fr' ? 'MARQUE *' : 'MAKE *'}</label>
                <input type="text" placeholder="Honda, Yamaha, Harley..." value={form.make} onChange={set('make')} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>{lang === 'fr' ? 'MODÈLE *' : 'MODEL *'}</label>
                <input type="text" placeholder="CBR600RR, MT-07..." value={form.model} onChange={set('model')} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>{lang === 'fr' ? 'ANNÉE *' : 'YEAR *'}</label>
                <select value={form.year} onChange={set('year')} style={{ ...inputStyle, cursor: 'pointer' }}>
                  {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>KM</label>
                <input type="number" placeholder="ex: 12500" value={form.mileage} onChange={set('mileage')} style={inputStyle} min="0" />
              </div>
              <div>
                <label style={labelStyle}>{lang === 'fr' ? 'ÉTAT *' : 'CONDITION *'}</label>
                <select value={form.condition} onChange={set('condition')} style={{ ...inputStyle, cursor: 'pointer' }}>
                  {CONDITIONS.map(c => <option key={c.value} value={c.value}>{lang === 'fr' ? c.labelFr : c.labelEn}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* ── LISTING CONTENT ── */}
          <div style={{ marginBottom: 28 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#0a0a0a', marginBottom: 16, paddingBottom: 8, borderBottom: '1px solid #e8e3d8' }}>
              {lang === 'fr' ? '2. Détails de l\'annonce' : '2. Listing details'}
            </p>
            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>{lang === 'fr' ? 'TITRE DE L\'ANNONCE *' : 'LISTING TITLE *'}</label>
              <input
                type="text"
                placeholder={lang === 'fr' ? 'ex: Honda CBR 600RR 2019 — excellente condition' : 'ex: Honda CBR 600RR 2019 — excellent condition'}
                value={form.title} onChange={set('title')} style={inputStyle} maxLength={120}
              />
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>{lang === 'fr' ? 'PRIX DEMANDÉ (CAD) *' : 'ASKING PRICE (CAD) *'}</label>
              <input type="number" placeholder="ex: 7500" value={form.price} onChange={set('price')} style={inputStyle} min="1" />
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>{lang === 'fr' ? 'DESCRIPTION' : 'DESCRIPTION'}</label>
              <textarea
                placeholder={lang === 'fr' ? 'Historique du véhicule, modifications, raison de vente...' : 'Vehicle history, modifications, reason for selling...'}
                value={form.description} onChange={set('description')}
                style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }}
              />
            </div>
            <div>
              <label style={labelStyle}>{lang === 'fr' ? 'URL DE LA PHOTO (optionnel)' : 'PHOTO URL (optional)'}</label>
              <input type="url" placeholder="https://..." value={form.imageUrl} onChange={set('imageUrl')} style={inputStyle} />
              <p style={{ fontSize: 11, color: '#888', marginTop: 4 }}>
                {lang === 'fr' ? 'Hébergez votre photo sur Imgur ou Google Photos et collez le lien.' : 'Host your photo on Imgur or Google Photos and paste the link.'}
              </p>
            </div>
          </div>

          {/* ── SELLER INFO ── */}
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#0a0a0a', marginBottom: 16, paddingBottom: 8, borderBottom: '1px solid #e8e3d8' }}>
              {lang === 'fr' ? '3. Vos coordonnées' : '3. Your contact information'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="form-grid">
              <div>
                <label style={labelStyle}>{lang === 'fr' ? 'NOM *' : 'NAME *'}</label>
                <input type="text" placeholder={lang === 'fr' ? 'Votre nom' : 'Your name'} value={form.sellerName} onChange={set('sellerName')} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>{lang === 'fr' ? 'TÉLÉPHONE *' : 'PHONE *'}</label>
                <input type="tel" placeholder="819-555-1234" value={form.sellerPhone} onChange={set('sellerPhone')} style={inputStyle} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>{lang === 'fr' ? 'COURRIEL' : 'EMAIL'}</label>
                <input type="email" placeholder={lang === 'fr' ? 'Optionnel' : 'Optional'} value={form.sellerEmail} onChange={set('sellerEmail')} style={inputStyle} />
              </div>
            </div>
          </div>

          {error && (
            <div style={{ padding: '12px 16px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, marginBottom: 16, fontSize: 13, color: '#dc2626' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: '100%', padding: '15px', background: '#0a0a0a', color: '#fff',
              border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700,
              cursor: submitting ? 'not-allowed' : 'pointer', opacity: submitting ? 0.6 : 1,
            }}
          >
            {submitting
              ? (lang === 'fr' ? 'Envoi en cours...' : 'Submitting...')
              : (lang === 'fr' ? 'Soumettre mon annonce →' : 'Submit my listing →')}
          </button>
          <p style={{ fontSize: 11, color: '#888', textAlign: 'center', marginTop: 10 }}>
            {lang === 'fr'
              ? 'Le paiement est collecté lors de la confirmation téléphonique. Aucune carte requise maintenant.'
              : 'Payment is collected during phone confirmation. No card required now.'}
          </p>
        </form>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
