interface SectionHeaderProps {
  label: string;
  heading: string;
  accentColor?: string;
  textColor?: string;
  headingStyle?: React.CSSProperties;
}

export default function SectionHeader({ label, heading, accentColor, textColor, headingStyle }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: 24 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: accentColor ?? '#6b6b80',
          marginBottom: 8,
        }}
      >
        {label}
      </p>
      <h2
        style={{
          fontSize: 28,
          fontWeight: 800,
          color: textColor ?? '#e8e8f0',
          lineHeight: 1.2,
          ...headingStyle,
        }}
      >
        {heading}
      </h2>
    </div>
  );
}
