// Radikal ONLY — Police Harley-Davidson trust signal
// Navy gradient background, gold heading, restrained and professional tone
// DO NOT show on Dynamik's page

import { Lang, tr } from '@/lib/i18n';

interface PoliceTrustProps {
  lang: Lang;
}

export default function PoliceTrust({ lang }: PoliceTrustProps) {
  return (
    <section
      style={{
        padding: '48px 20px',
        background: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 60%, #0a1628 100%)',
      }}
    >
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        {/* Badge */}
        <div style={{ marginBottom: 16 }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#D4AF3780',
            }}
          >
            {tr('policeTrustLabel', lang)}
          </span>
        </div>

        {/* Icon */}
        <div style={{ fontSize: 40, marginBottom: 16 }}>🚔</div>

        {/* Heading */}
        <h2
          style={{
            fontSize: 'clamp(22px, 5vw, 32px)',
            fontWeight: 800,
            color: '#D4AF37',
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          {tr('policeTrustHeading', lang)}
        </h2>

        {/* Body */}
        <p
          style={{
            fontSize: 15,
            color: '#a0a0b8',
            lineHeight: 1.7,
            maxWidth: 480,
            margin: '0 auto',
          }}
        >
          {tr('policeTrustBody', lang)}
        </p>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 2,
            background: '#D4AF3740',
            margin: '24px auto 0',
            borderRadius: 1,
          }}
        />
      </div>
    </section>
  );
}
