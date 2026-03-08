'use client';

import { useState, useEffect } from 'react';
import { shops } from '@/lib/shops';
import { Lang } from '@/lib/i18n';
import LanguageToggle from '@/components/ui/LanguageToggle';
import HeroSection from '@/components/shop/HeroSection';
import ServiceGrid from '@/components/shop/ServiceGrid';
import ReviewCards from '@/components/shop/ReviewCards';
import AboutOwner from '@/components/shop/AboutOwner';
import BookingForm from '@/components/shop/BookingForm';
import ShopFooter from '@/components/shop/ShopFooter';

const shop = shops.dynamik;

export default function DynamikPage() {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('moto-lang') as Lang | null;
    if (saved === 'en') setLang('en');
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f1a' }}>
      {/* Language toggle — top right */}
      <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 100 }}>
        <LanguageToggle lang={lang} onToggle={setLang} />
      </div>

      <HeroSection shop={shop} lang={lang} />
      <ServiceGrid shop={shop} lang={lang} />
      <ReviewCards shop={shop} lang={lang} />
      <AboutOwner shop={shop} lang={lang} />
      <BookingForm shop={shop} lang={lang} />
      <ShopFooter shop={shop} lang={lang} />
    </div>
  );
}
