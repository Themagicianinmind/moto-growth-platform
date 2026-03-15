'use client';

import { useState, FormEvent } from 'react';
import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';
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
      <section id="booking" style={{ padding: '56px 20px', background: '#f5f4f0' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e8e3d8',
              borderRadius: 12,
              padding: 32,
              textAlign: 'center',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <p style={{ fontSize: 20, fontWeight: 600, color: '#0a0a0a', marginBottom: 8, fontFamily: 'var(--font-cormorant), Georgia, serif' }}>
              {tr('bookingSuccess', lang)}
            </p>
            <p style={{ fontSize: 14, color: '#888' }}>{shop.phone}</p>
          </div>
        </div>
      </section>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#ffffff',
    border: '1px solid #ddd8cc',
    borderRadius: 8,
    padding: '10px 14px',
    color: '#1a1a1a',
    fontSize: 14,
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    outline: 'none',
  };

  return (
    <section id="booking" style={{ padding: '56px 20px', background: '#f5f4f0' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <SectionHeader
          label={tr('bookingLabel', lang)}
          heading={tr('bookingHeading', lang)}
          accentColor={shop.accentColor}
          textColor="#0a0a0a"
          headingStyle={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300, fontSize: 32 }}
        />
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e8e3d8',
            borderRadius: 12,
            padding: 28,
            boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>
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
              <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>
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
              <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>
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
              <label style={{ fontSize: 13, fontWeight: 600, color: '#555', display: 'block', marginBottom: 6 }}>
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
        </div>
      </div>
    </section>
  );
}
