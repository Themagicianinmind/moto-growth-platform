'use client';

import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const BASE_URL = 'https://moto-growth-platform.vercel.app';

interface QRItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  color: string;
  bg: string;
}

const PRESETS: QRItem[] = [
  {
    id: 'exam-radikal',
    title: 'Exam moto → Radikal',
    subtitle: 'Partenaire école · ref=ecole-radikal',
    url: `${BASE_URL}/exam?ref=ecole-radikal`,
    color: '#D4AF37',
    bg: '#D4AF3715',
  },
  {
    id: 'exam-dynamik',
    title: 'Exam moto → Dynamik',
    subtitle: 'Partenaire école · ref=ecole-dynamik',
    url: `${BASE_URL}/exam?ref=ecole-dynamik`,
    color: '#2563eb',
    bg: '#2563eb15',
  },
  {
    id: 'exam-general',
    title: 'Exam moto (général)',
    subtitle: 'Sans référence d\'école',
    url: `${BASE_URL}/exam`,
    color: '#0d9488',
    bg: '#0d948815',
  },
  {
    id: 'shop-radikal',
    title: 'Radikal Motosport',
    subtitle: '156 De Varennes, Gatineau · 819-561-6686',
    url: `${BASE_URL}/radikal`,
    color: '#D4AF37',
    bg: '#D4AF3715',
  },
  {
    id: 'shop-dynamik',
    title: 'Dynamik Performance',
    subtitle: '144 Ch. Freeman, Gatineau · 819-772-9444',
    url: `${BASE_URL}/dynamik`,
    color: '#2563eb',
    bg: '#2563eb15',
  },
];

export default function QRPage() {
  const [customCode, setCustomCode] = useState('');
  const [customTitle, setCustomTitle] = useState('');

  const customQR: QRItem | null =
    customCode.trim()
      ? {
          id: 'custom',
          title: customTitle.trim() || `Exam → ${customCode.trim()}`,
          subtitle: `ref=${customCode.trim().toLowerCase().replace(/\s+/g, '-')}`,
          url: `${BASE_URL}/exam?ref=${encodeURIComponent(customCode.trim().toLowerCase().replace(/\s+/g, '-'))}`,
          color: '#16a34a',
          bg: '#16a34a15',
        }
      : null;

  const allItems = customQR ? [...PRESETS, customQR] : PRESETS;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0f0f1a',
        padding: '40px 20px 80px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <a
            href="/"
            style={{ fontSize: 13, color: '#6b6b80', textDecoration: 'none', fontWeight: 600 }}
          >
            ← Retour / Back
          </a>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 16,
            marginBottom: 8,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#6b6b80',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 6,
              }}
            >
              PARTENAIRES · PARTNERS
            </p>
            <h1
              style={{
                fontSize: 'clamp(22px, 5vw, 36px)',
                fontWeight: 900,
                color: '#e8e8f0',
                letterSpacing: '-0.03em',
                marginBottom: 8,
              }}
            >
              Kit QR Codes
            </h1>
            <p style={{ fontSize: 14, color: '#a0a0b8' }}>
              Imprimez et affichez ces codes dans votre école de conduite.
              <br />
              <span style={{ color: '#6b6b80' }}>
                Print and display these codes in your driving school.
              </span>
            </p>
          </div>

          <button
            onClick={() => window.print()}
            style={{
              background: '#D4AF37',
              color: '#1a1a2e',
              border: 'none',
              borderRadius: 8,
              padding: '10px 22px',
              fontSize: 14,
              fontWeight: 800,
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            🖨️ Imprimer / Print
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#1e1e35', margin: '28px 0' }} />

        {/* Section: École */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: '#6b6b80',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: 20,
          }}
        >
          📚 Pour les écoles de conduite / For Driving Schools
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 20,
            marginBottom: 40,
          }}
        >
          {allItems.slice(0, 3).map((item) => (
            <QRCard key={item.id} item={item} />
          ))}
        </div>

        {/* Section: Boutiques */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: '#6b6b80',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: 20,
          }}
        >
          🏍️ Pages boutiques / Shop Pages
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 20,
            marginBottom: 48,
          }}
        >
          {allItems.slice(3, 5).map((item) => (
            <QRCard key={item.id} item={item} />
          ))}
        </div>

        {/* Custom QR generator */}
        <div
          style={{
            background: '#161625',
            border: '1px solid #1e1e35',
            borderRadius: 12,
            padding: 28,
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: '#6b6b80',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 16,
            }}
          >
            ⚙️ Code personnalisé / Custom Code
          </p>
          <p style={{ fontSize: 13, color: '#a0a0b8', marginBottom: 20 }}>
            Générez un code QR unique pour une école partenaire spécifique.
            <br />
            <span style={{ color: '#6b6b80' }}>
              Generate a unique QR code for a specific partner school.
            </span>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
            <input
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              placeholder="Nom de l'école / School name (optionnel)"
              style={{
                background: '#0f0f1a',
                border: '1px solid #2a2a40',
                borderRadius: 8,
                padding: '10px 14px',
                color: '#e8e8f0',
                fontSize: 14,
                fontFamily: 'inherit',
                outline: 'none',
              }}
            />
            <input
              value={customCode}
              onChange={(e) => setCustomCode(e.target.value)}
              placeholder="Code de référence / Ref code (ex: conduire-gatineau)"
              style={{
                background: '#0f0f1a',
                border: '1px solid #2a2a40',
                borderRadius: 8,
                padding: '10px 14px',
                color: '#e8e8f0',
                fontSize: 14,
                fontFamily: 'inherit',
                outline: 'none',
              }}
            />
          </div>

          {customQR && (
            <div style={{ marginTop: 24 }}>
              <QRCard item={customQR} />
            </div>
          )}
        </div>

        {/* Footer note */}
        <p style={{ fontSize: 11, color: '#3a3a50', marginTop: 40, textAlign: 'center' }}>
          Moto Growth Platform · moto-growth-platform.vercel.app · © 2026 Possibilities IN MIND™
        </p>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function QRCard({ item }: { item: QRItem }) {
  return (
    <div
      style={{
        background: '#161625',
        border: `1px solid ${item.color}30`,
        borderRadius: 12,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
      }}
    >
      {/* QR Code */}
      <div
        style={{
          background: 'white',
          padding: 12,
          borderRadius: 8,
          display: 'inline-block',
        }}
      >
        <QRCodeSVG
          value={item.url}
          size={160}
          bgColor="#ffffff"
          fgColor="#1a1a2e"
          level="M"
          includeMargin={false}
        />
      </div>

      {/* Label */}
      <div style={{ textAlign: 'center', width: '100%' }}>
        <p
          style={{
            fontSize: 14,
            fontWeight: 800,
            color: item.color,
            marginBottom: 4,
            lineHeight: 1.2,
          }}
        >
          {item.title}
        </p>
        <p style={{ fontSize: 11, color: '#6b6b80', marginBottom: 10 }}>{item.subtitle}</p>
        <p
          style={{
            fontSize: 10,
            color: '#3a3a50',
            wordBreak: 'break-all',
            background: '#0f0f1a',
            padding: '4px 8px',
            borderRadius: 4,
            fontFamily: 'monospace',
          }}
        >
          {item.url}
        </p>
      </div>
    </div>
  );
}
