'use client';

import { useState, useEffect } from 'react';
import { shops } from '@/lib/shops';
import { Lang } from '@/lib/i18n';
import ShopNavbar from '@/components/shop/ShopNavbar';
import HeroSection from '@/components/shop/HeroSection';
import ServiceGrid from '@/components/shop/ServiceGrid';
import PoliceTrust from '@/components/shop/PoliceTrust';
import ReviewCards from '@/components/shop/ReviewCards';
import AboutOwner from '@/components/shop/AboutOwner';
import BookingForm from '@/components/shop/BookingForm';
import ShopFooter from '@/components/shop/ShopFooter';

const shop = shops.radikal;

export default function RadikalPage() {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('moto-lang') as Lang | null;
    if (saved === 'en') setLang('en');
  }, []);

  const handleLangToggle = (l: Lang) => {
    setLang(l);
    localStorage.setItem('moto-lang', l);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f1a' }}>
      <ShopNavbar shop={shop} lang={lang} onToggleLang={handleLangToggle} />
      <HeroSection shop={shop} lang={lang} />
      <ServiceGrid shop={shop} lang={lang} />
      <PoliceTrust lang={lang} />
      <ReviewCards shop={shop} lang={lang} />
      <AboutOwner shop={shop} lang={lang} />
      <BookingForm shop={shop} lang={lang} />
      <ShopFooter shop={shop} lang={lang} />
    </div>
  );
}
