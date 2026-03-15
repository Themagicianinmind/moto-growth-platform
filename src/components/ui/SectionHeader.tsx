import { CSSProperties, ReactNode } from 'react';

interface SectionHeaderProps {
  label: string;
  heading: string;
  subtitle?: string;
  accentColor?: string;
  textColor?: string;
  headingStyle?: CSSProperties;
  centered?: boolean;
  cta?: ReactNode;
}

export default function SectionHeader({
  label,
  heading,
  subtitle,
  accentColor,
  textColor,
  headingStyle,
  centered = false,
  cta,
}: SectionHeaderProps) {
  return (
    <div
      style={{
        marginBottom: 40,
        textAlign: centered ? 'center' : 'left',
      }}
    >
      {/* Eyebrow label */}
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: accentColor ?? '#9e8a5a',
          marginBottom: 10,
        }}
      >
        {label}
      </p>

      {/* Heading */}
      <h2
        style={{
          fontSize: 'clamp(26px, 4vw, 38px)',
          fontWeight: 300,
          color: textColor ?? '#0a0a0a',
          lineHeight: 1.15,
          marginBottom: subtitle ? 14 : 0,
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          letterSpacing: '-0.01em',
          ...headingStyle,
        }}
      >
        {heading}
      </h2>

      {/* Accent rule */}
      <div
        style={{
          width: centered ? 40 : 32,
          height: 1,
          background: accentColor ?? '#9e8a5a',
          margin: subtitle ? '14px auto 14px' : centered ? '14px auto 0' : '14px 0 0',
        }}
      />

      {/* Optional subtitle */}
      {subtitle && (
        <p
          style={{
            fontSize: 15,
            color: '#555',
            lineHeight: 1.65,
            maxWidth: centered ? 520 : 560,
            margin: centered ? '0 auto' : 0,
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Optional CTA */}
      {cta && (
        <div style={{ marginTop: 20 }}>{cta}</div>
      )}
    </div>
  );
}
