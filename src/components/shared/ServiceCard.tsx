'use client';

import { useState } from 'react';
import { Service } from '@/lib/shops';
import { Lang } from '@/lib/i18n';

interface ServiceCardProps {
  service: Service;
  lang: Lang;
  accentColor: string;
}

export default function ServiceCard({ service, lang, accentColor }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  const name = lang === 'fr' ? service.nameFr : service.nameEn;
  const desc = lang === 'fr' ? service.descFr : service.descEn;

  return (
    <a
      href={service.href ?? '#booking'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#ffffff',
        border: `1px solid ${hovered ? accentColor + '60' : '#e8e3d8'}`,
        borderRadius: 8,
        padding: '24px 20px',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
        boxShadow: hovered
          ? `0 4px 20px rgba(0,0,0,0.08), 0 0 0 1px ${accentColor}20`
          : '0 1px 4px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 10,
          background: service.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 26,
          marginBottom: 16,
          border: '1px solid #e8e3d8',
          transition: 'transform 0.2s',
          transform: hovered ? 'scale(1.05)' : 'none',
        }}
      >
        {service.icon}
      </div>

      {/* Name */}
      <p
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: '#0a0a0a',
          marginBottom: 6,
          lineHeight: 1.3,
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          letterSpacing: '-0.01em',
        }}
      >
        {name}
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: 12,
          color: '#888',
          lineHeight: 1.55,
          flex: 1,
        }}
      >
        {desc}
      </p>

      {/* Hover arrow */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          marginTop: 16,
          fontSize: 12,
          fontWeight: 700,
          color: hovered ? accentColor : '#ccc',
          transition: 'color 0.2s',
        }}
      >
        <span>{lang === 'fr' ? 'Réserver' : 'Book'}</span>
        <span
          style={{
            transform: hovered ? 'translateX(4px)' : 'none',
            transition: 'transform 0.2s',
          }}
        >
          →
        </span>
      </div>
    </a>
  );
}
