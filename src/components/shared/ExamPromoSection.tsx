'use client';

import { Lang } from '@/lib/i18n';

const SERIF = 'var(--font-cormorant), Georgia, serif';

interface ExamPromoSectionProps {
  lang: Lang;
  accentColor: string;
}

export default function ExamPromoSection({ lang, accentColor }: ExamPromoSectionProps) {
  const isFr = lang === 'fr';

  return (
    <section
      id="exam-promo"
      style={{
        background: '#f5f4f0',
        padding: 'clamp(64px, 8vw, 96px) 24px',
        overflow: 'hidden',
      }}
    >
      <div
        className="exam-promo-inner"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}
      >
        {/* ── LEFT — visual ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: 260,
              height: 260,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {/* Outer decorative ring */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: `2px solid ${accentColor}20`,
              }}
            />
            {/* Inner ring */}
            <div
              style={{
                position: 'absolute',
                inset: 18,
                borderRadius: '50%',
                border: `1px solid ${accentColor}15`,
              }}
            />
            {/* Main circle */}
            <div
              style={{
                width: 168,
                height: 168,
                borderRadius: '50%',
                background: 'linear-gradient(145deg, #0f1a2e 0%, #1a2a46 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 20px 60px ${accentColor}20, 0 4px 16px rgba(0,0,0,0.15)`,
              }}
            >
              <span style={{ fontSize: 52, lineHeight: 1 }}>🪖</span>
              <span
                style={{
                  fontSize: 10,
                  color: `${accentColor}cc`,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  marginTop: 10,
                  textTransform: 'uppercase',
                }}
              >
                Exam Prep
              </span>
            </div>

            {/* Floating badge — questions */}
            <div
              style={{
                position: 'absolute',
                top: 12,
                right: -8,
                background: '#ffffff',
                border: `1px solid ${accentColor}30`,
                borderRadius: 100,
                padding: '6px 14px',
                fontSize: 11,
                fontWeight: 700,
                color: accentColor,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                whiteSpace: 'nowrap',
              }}
            >
              ★ 600 {isFr ? 'questions' : 'questions'}
            </div>

            {/* Floating badge — audio */}
            <div
              style={{
                position: 'absolute',
                bottom: 20,
                left: -8,
                background: '#ffffff',
                border: '1px solid #e8e3d8',
                borderRadius: 100,
                padding: '6px 14px',
                fontSize: 11,
                fontWeight: 700,
                color: '#555',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                whiteSpace: 'nowrap',
              }}
            >
              🔊 {isFr ? 'Audio intégré' : 'Built-in audio'}
            </div>

            {/* Floating badge — QC + ON */}
            <div
              style={{
                position: 'absolute',
                bottom: 60,
                right: -12,
                background: '#ffffff',
                border: '1px solid #e8e3d8',
                borderRadius: 100,
                padding: '6px 14px',
                fontSize: 11,
                fontWeight: 700,
                color: '#555',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                whiteSpace: 'nowrap',
              }}
            >
              QC · ON
            </div>
          </div>
        </div>

        {/* ── RIGHT — content ── */}
        <div>
          {/* Eyebrow pill */}
          <div style={{ marginBottom: 16 }}>
            <span
              style={{
                display: 'inline-block',
                background: `${accentColor}15`,
                border: `1px solid ${accentColor}35`,
                borderRadius: 100,
                padding: '4px 16px',
                fontSize: 11,
                fontWeight: 700,
                color: accentColor,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {isFr ? 'Gratuit · Free' : 'Free · Gratuit'}
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 46px)',
              fontWeight: 300,
              color: '#0a0a0a',
              fontFamily: SERIF,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            {isFr
              ? 'Préparez votre examen moto — gratuitement.'
              : 'Prepare for your motorcycle exam — for free.'}
          </h2>

          {/* Accent rule */}
          <div
            style={{ width: 40, height: 2, background: accentColor, marginBottom: 20 }}
          />

          {/* Body */}
          <p
            style={{
              fontSize: 'clamp(14px, 1.8vw, 16px)',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: 28,
              maxWidth: 480,
            }}
          >
            {isFr
              ? 'Quiz interactif, 600 questions, audio intégré. Québec (SAAQ) et Ontario (M1/M2/M). Passez du premier coup.'
              : 'Interactive quiz, 600 questions, built-in audio. Quebec (SAAQ) and Ontario (M1/M2/M). Pass on your first try.'}
          </p>

          {/* CTA */}
          <a
            href="/exam"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: accentColor,
              color: '#ffffff',
              padding: '14px 36px',
              borderRadius: 100,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              marginBottom: 14,
            }}
          >
            {isFr ? 'Commencer le quiz →' : 'Start the quiz →'}
          </a>

          {/* Free note */}
          <p style={{ fontSize: 12, color: '#aaa', marginBottom: 20 }}>
            {isFr
              ? 'Aucune inscription requise. 100% gratuit.'
              : 'No signup required. 100% free.'}
          </p>

          {/* Family attribution */}
          <p
            style={{
              fontSize: 12,
              color: '#999',
              fontStyle: 'italic',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ color: accentColor, fontSize: 14 }}>—</span>
            Un service de la famille Jean-Baptiste
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exam-promo-inner {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 40px !important;
          }
          .exam-promo-inner > div:first-child {
            justify-content: center;
          }
          .exam-promo-inner p {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
}
