interface SectionHeaderProps {
  label: string;
  heading: string;
  accentColor?: string;
}

export default function SectionHeader({ label, heading, accentColor }: SectionHeaderProps) {
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
          color: '#e8e8f0',
          lineHeight: 1.2,
        }}
      >
        {heading}
      </h2>
    </div>
  );
}
