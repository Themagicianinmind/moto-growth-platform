import { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  accentColor?: string;
  style?: React.CSSProperties;
}

export default function CTAButton({
  children,
  variant = 'primary',
  href,
  onClick,
  fullWidth,
  accentColor = '#D4AF37',
  style,
}: CTAButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '12px 24px',
    borderRadius: 10,
    fontWeight: 800,
    fontSize: 15,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.2s',
    width: fullWidth ? '100%' : undefined,
    fontFamily: 'inherit',
    border: 'none',
    ...style,
  };

  const variantStyle: React.CSSProperties =
    variant === 'primary'
      ? { background: accentColor, color: '#1a1a2e' }
      : variant === 'secondary'
      ? {
          background: `${accentColor}15`,
          border: `1px solid ${accentColor}80`,
          color: accentColor,
        }
      : {
          background: 'transparent',
          border: `1px solid #1e1e35`,
          color: '#a0a0b8',
        };

  const combined = { ...baseStyle, ...variantStyle };

  if (href) {
    return (
      <a href={href} style={combined}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={combined}>
      {children}
    </button>
  );
}
