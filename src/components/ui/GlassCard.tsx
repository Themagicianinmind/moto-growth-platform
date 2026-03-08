import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function GlassCard({ children, className = '', style }: GlassCardProps) {
  return (
    <div
      className={`rounded-xl ${className}`}
      style={{
        background: '#161625',
        border: '1px solid #1e1e35',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
