'use client';

import { useState, FormEvent } from 'react';
import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';
import SectionHeader from '@/components/ui/SectionHeader';
import CTAButton from '@/components/ui/CTAButton';

interface FinancingSectionProps {
  shop: Shop;
  lang: Lang;
}

interface FinancingForm {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  downPayment: string;
  employment: string;
}

const SERIF = 'var(--font-cormorant), Georgia, serif';

export default function FinancingSection({ shop, lang }: FinancingSectionProps) {
  const [form, setForm] = useState<FinancingForm>({
    name: '', phone: '', email: '', vehicle: '', downPayment: '', employment: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const ACCENT = shop.accentColor;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.vehicle || !form.employment) {
      setError(true);
      return;
    }
    try {
      // Phase 1: save to localStorage
      const existing = JSON.parse(localStorage.getItem('moto-financing') || '[]');
      existing.push({ ...form, shopId: shop.id, submittedAt: new Date().toISOString() });
      localStorage.setItem('moto-financing', JSON.stringify(existing));
      setSubmitted(true);
      setError(false);
    } catch {
      setError(true);
    }
  };

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

  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    color: '#555',
    display: 'block',
    marginBottom: 6,
  };

  // Partner cards — TD is confirmed official Piaggio Canada partner
  const partners = [
    {
      name: tr('financingTD', lang),
      desc: tr('financingTDDesc', lang),
      badge: tr('financingTDBadge', lang),
      icon: '🏦',
      primary: true,
      color: ACCENT,
    },
    {
      name: tr('financingDesjardins', lang),
      desc: tr('financingDesjardinsDesc', lang),
      badge: null,
      icon: '🌻',
      primary: false,
      color: '#16a34a',
    },
    {
      name: tr('financingLendCare', lang),
      desc: tr('financingLendCareDesc', lang),
      badge: null,
      icon: '✅',
      primary: false,
      color: '#0d9488',
    },
  ];

  // Vespa model options
  const vehicleOptions = shop.vespaModels?.map(m => ({
    value: m.id,
    label: lang === 'fr' ? m.nameFr : m.nameEn,
  })) ?? [];

  const downPaymentOptions = [
    { value: '0', label: lang === 'fr' ? 'Aucune mise de fonds' : 'No down payment' },
    { value: '500-1000', label: lang === 'fr' ? '500 $ – 1 000 $' : '$500 – $1,000' },
    { value: '1000-2500', label: lang === 'fr' ? '1 000 $ – 2 500 $' : '$1,000 – $2,500' },
    { value: '2500+', label: lang === 'fr' ? '2 500 $ et plus' : '$2,500 and over' },
  ];

  return (
    <section id="financement" style={{ padding: '72px 20px', background: '#ffffff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader
          label={tr('financingLabel', lang)}
          heading={tr('financingHeading', lang)}
          subtitle={tr('financingSubtitle', lang)}
          accentColor={ACCENT}
          textColor="#0a0a0a"
          headingStyle={{ fontFamily: SERIF, fontWeight: 300, fontSize: 36 }}
        />

        {/* Promo rate callout */}
        <div
          style={{
            background: `${ACCENT}08`,
            border: `1px solid ${ACCENT}30`,
            borderLeft: `4px solid ${ACCENT}`,
            borderRadius: 10,
            padding: '18px 24px',
            marginBottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <span style={{ fontFamily: SERIF, fontSize: 42, fontWeight: 300, color: ACCENT }}>
              {tr('financingRateValue', lang)}
            </span>
            <span style={{ fontSize: 14, color: '#555', marginLeft: 10 }}>
              {tr('financingRateNote', lang)}
            </span>
          </div>
          <div
            style={{
              marginLeft: 'auto',
              background: ACCENT,
              color: '#fff',
              borderRadius: 100,
              padding: '8px 22px',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}
          >
            TD Auto Finance
          </div>
        </div>

        {/* Two-column layout: partners + form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)',
            gap: 40,
            alignItems: 'start',
          }}
        >
          {/* LEFT — Partners */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 20 }}>
              {tr('financingPartners', lang)}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {partners.map((p) => (
                <div
                  key={p.name}
                  style={{
                    background: p.primary ? `${p.color}06` : '#ffffff',
                    border: `1px solid ${p.primary ? p.color + '40' : '#e8e3d8'}`,
                    borderRadius: 12,
                    padding: '18px 20px',
                    display: 'flex',
                    gap: 14,
                    alignItems: 'flex-start',
                    boxShadow: p.primary ? `0 2px 12px ${p.color}15` : '0 1px 4px rgba(0,0,0,0.04)',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: `${p.color}12`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 22,
                      flexShrink: 0,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: '#0a0a0a', fontFamily: SERIF }}>{p.name}</p>
                      {p.badge && (
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            background: ACCENT,
                            color: '#fff',
                            borderRadius: 100,
                            padding: '2px 8px',
                          }}
                        >
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p style={{ fontSize: 11, color: '#aaa', lineHeight: 1.6, marginTop: 20 }}>
              {tr('financingDisclaimer', lang)}
            </p>
          </div>

          {/* RIGHT — Pre-qualification form */}
          <div>
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e8e3d8',
                borderRadius: 14,
                padding: 28,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <p style={{ fontSize: 20, fontWeight: 600, color: '#0a0a0a', fontFamily: SERIF, marginBottom: 8 }}>
                    {tr('financingSuccess', lang)}
                  </p>
                  <p style={{ fontSize: 13, color: '#888' }}>{shop.phone}</p>
                </div>
              ) : (
                <>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 4 }}>
                    {tr('financingFormLabel', lang)}
                  </p>
                  <p style={{ fontSize: 22, fontFamily: SERIF, fontWeight: 300, color: '#0a0a0a', marginBottom: 4 }}>
                    {tr('financingFormHeading', lang)}
                  </p>
                  <p style={{ fontSize: 13, color: '#888', marginBottom: 22 }}>
                    {tr('financingFormSubtitle', lang)}
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {/* Name */}
                    <div>
                      <label style={labelStyle}>{tr('financingName', lang)} *</label>
                      <input
                        style={inputStyle}
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder={lang === 'fr' ? 'Jean Tremblay' : 'John Smith'}
                      />
                    </div>

                    {/* Phone + Email side by side */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      <div>
                        <label style={labelStyle}>{tr('financingPhone', lang)} *</label>
                        <input
                          style={inputStyle}
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder="819-555-0000"
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>{tr('financingEmail', lang)}</label>
                        <input
                          style={inputStyle}
                          type="email"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="jean@email.com"
                        />
                      </div>
                    </div>

                    {/* Vehicle */}
                    <div>
                      <label style={labelStyle}>{tr('financingVehicle', lang)} *</label>
                      <select
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        value={form.vehicle}
                        onChange={e => setForm({ ...form, vehicle: e.target.value })}
                      >
                        <option value="">{tr('financingSelectVehicle', lang)}</option>
                        {vehicleOptions.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                        <option value="other">{lang === 'fr' ? 'Autre / Je ne sais pas encore' : 'Other / Not sure yet'}</option>
                      </select>
                    </div>

                    {/* Down payment + Employment side by side */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      <div>
                        <label style={labelStyle}>{tr('financingDownPayment', lang)}</label>
                        <select
                          style={{ ...inputStyle, cursor: 'pointer' }}
                          value={form.downPayment}
                          onChange={e => setForm({ ...form, downPayment: e.target.value })}
                        >
                          <option value="">—</option>
                          {downPaymentOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>{tr('financingEmployment', lang)} *</label>
                        <select
                          style={{ ...inputStyle, cursor: 'pointer' }}
                          value={form.employment}
                          onChange={e => setForm({ ...form, employment: e.target.value })}
                        >
                          <option value="">{tr('financingSelectEmployment', lang)}</option>
                          <option value="full-time">{tr('financingEmployed', lang)}</option>
                          <option value="part-time">{tr('financingPartTime', lang)}</option>
                          <option value="self-employed">{tr('financingSelfEmployed', lang)}</option>
                          <option value="retired">{tr('financingRetired', lang)}</option>
                          <option value="other">{tr('financingOther', lang)}</option>
                        </select>
                      </div>
                    </div>

                    {/* Consent */}
                    <p style={{ fontSize: 11, color: '#aaa', lineHeight: 1.5 }}>
                      {tr('financingConsent', lang)}
                    </p>

                    {error && (
                      <p style={{ color: '#dc2626', fontSize: 13 }}>{tr('financingError', lang)}</p>
                    )}

                    <CTAButton accentColor={ACCENT} fullWidth>
                      {tr('financingSubmit', lang)}
                    </CTAButton>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
