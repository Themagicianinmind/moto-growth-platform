'use client';

import { useState, FormEvent } from 'react';
import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeader from '@/components/ui/SectionHeader';
import CTAButton from '@/components/ui/CTAButton';

interface BookingFormProps {
  shop: Shop;
  lang: Lang;
}

interface FormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export default function BookingForm({ shop, lang }: BookingFormProps) {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.service) {
      setError(true);
      return;
    }
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, shopId: shop.id }),
      });
      if (!res.ok) throw new Error('API error');
      setSubmitted(true);
      setError(false);
    } catch {
      setError(true);
    }
  };

  if (submitted) {
    return (
      <section id="booking" style={{ padding: '48px 20px' }}>
        <GlassCard style={{ padding: 32, textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#e8e8f0', marginBottom: 8 }}>
            {tr('bookingSuccess', lang)}
          </p>
          <p style={{ fontSize: 14, color: '#6b6b80' }}>{shop.phone}</p>
        </GlassCard>
      </section>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#0f0f1a',
    border: '1px solid #1e1e35',
    borderRadius: 8,
    padding: '10px 14px',
    color: '#e8e8f0',
    fontSize: 14,
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    outline: 'none',
  };

  return (
    <section id="booking" style={{ padding: '48px 20px' }}>
      <SectionHeader
        label={tr('bookingLabel', lang)}
        heading={tr('bookingHeading', lang)}
        accentColor={shop.accentColor}
      />
      <GlassCard style={{ padding: 28 }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: '#a0a0b8', display: 'block', marginBottom: 6 }}>
              {tr('bookingName', lang)} *
            </label>
            <input
              style={inputStyle}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={lang === 'fr' ? 'Jean Tremblay' : 'John Smith'}
            />
          </div>

          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: '#a0a0b8', display: 'block', marginBottom: 6 }}>
              {tr('bookingPhone', lang)} *
            </label>
            <input
              style={inputStyle}
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="819-555-0000"
            />
          </div>

          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: '#a0a0b8', display: 'block', marginBottom: 6 }}>
              {tr('bookingService', lang)} *
            </label>
            <select
              style={{ ...inputStyle, cursor: 'pointer' }}
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              <option value="">{tr('selectService', lang)}</option>
              {shop.services.map((svc) => (
                <option key={svc.nameFr} value={svc.nameFr}>
                  {lang === 'fr' ? svc.nameFr : svc.nameEn}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: '#a0a0b8', display: 'block', marginBottom: 6 }}>
              {tr('bookingMessage', lang)}
            </label>
            <textarea
              style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={lang === 'fr' ? 'Décrivez le problème ou la demande...' : 'Describe the problem or request...'}
            />
          </div>

          {error && (
            <p style={{ color: '#dc2626', fontSize: 13 }}>{tr('bookingError', lang)}</p>
          )}

          <CTAButton accentColor={shop.accentColor} fullWidth>
            {tr('bookingSubmit', lang)}
          </CTAButton>
        </form>
      </GlassCard>
    </section>
  );
}
