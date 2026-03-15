import { ImageResponse } from 'next/og';

export const alt = 'Radikal Motosport — Powersports Gatineau · Fox Racing · Police Harley-Davidson';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function RadikalOGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0a0a0a',
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
            background: '#9e8a5a',
            display: 'flex',
          }}
        />

        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            right: -120,
            top: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(158, 138, 90, 0.06)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: -40,
            top: -40,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(158, 138, 90, 0.04)',
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
                background: '#9e8a5a',
                color: '#ffffff',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.12em',
                padding: '6px 16px',
                borderRadius: 100,
                display: 'flex',
              }}
            >
              POWERSPORTS GATINEAU
            </div>
            <span style={{ fontSize: 13, color: '#666', display: 'flex' }}>
              156 De Varennes · 819-561-6686
            </span>
          </div>

          {/* Middle: Main heading */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ fontSize: 64, fontWeight: 300, color: '#ffffff', lineHeight: 1.0, display: 'flex', flexDirection: 'column' }}>
              <span>Radikal</span>
              <span style={{ color: '#9e8a5a' }}>Motosport</span>
            </div>
            <div style={{ fontSize: 22, color: '#777', fontWeight: 400, maxWidth: 560, display: 'flex' }}>
              Réparation · Fox Racing · Police Harley-Davidson · 11+ marques
            </div>
          </div>

          {/* Bottom: Trust badges */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              '🚔 Partenaire Police HD',
              '🦊 Fox Racing officiel',
              '🏍️ 11+ marques servies',
              '✅ Inspection gratuite',
            ].map((badge) => (
              <div
                key={badge}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 100,
                  padding: '8px 18px',
                  fontSize: 14,
                  color: '#aaa',
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
            color: '#444',
            display: 'flex',
          }}
        >
          radikalmotosport.com
        </div>
      </div>
    ),
    { ...size }
  );
}
