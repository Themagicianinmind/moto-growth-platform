import { ImageResponse } from 'next/og';

export const alt = 'Dynamik Performance — Réparation moto experte depuis 1999 à Gatineau';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function DynamikOGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0f1a2e',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background accent stripe */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: '#2563eb',
            display: 'flex',
          }}
        />

        {/* Large decorative circle */}
        <div
          style={{
            position: 'absolute',
            right: -120,
            top: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(37, 99, 235, 0.08)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: -40,
            top: -40,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'rgba(37, 99, 235, 0.06)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '56px 64px',
            height: '100%',
          }}
        >
          {/* Top: Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                background: '#2563eb',
                color: '#ffffff',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.12em',
                padding: '6px 16px',
                borderRadius: 100,
                display: 'flex',
              }}
            >
              DEPUIS 1999
            </div>
            <span style={{ fontSize: 13, color: '#6b7fa3', display: 'flex' }}>
              Gatineau, Québec · 819-772-9444
            </span>
          </div>

          {/* Middle: Main heading */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ fontSize: 64, fontWeight: 300, color: '#ffffff', lineHeight: 1.0, display: 'flex', flexDirection: 'column' }}>
              <span>Dynamik</span>
              <span style={{ color: '#2563eb' }}>Performance</span>
            </div>
            <div style={{ fontSize: 22, color: '#94a3b8', fontWeight: 400, maxWidth: 560, display: 'flex' }}>
              Réparation moto experte · Concessionnaire Vespa & Piaggio · Gatineau
            </div>
          </div>

          {/* Bottom: Trust badges */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              '🛵 Concessionnaire Vespa officiel',
              '🔧 Toutes marques',
              '⭐ 5/5 Google',
              '🍁 AMO Moto',
            ].map((badge) => (
              <div
                key={badge}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 100,
                  padding: '8px 18px',
                  fontSize: 14,
                  color: '#cbd5e1',
                  display: 'flex',
                }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Right-side URL bar */}
        <div
          style={{
            position: 'absolute',
            right: 40,
            bottom: 28,
            fontSize: 13,
            color: '#4b6a9e',
            display: 'flex',
          }}
        >
          dynamikperformance.com
        </div>
      </div>
    ),
    { ...size }
  );
}
