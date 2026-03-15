'use client';

import { useState, useEffect } from 'react';
import { shops } from '@/lib/shops';
import { Lang } from '@/lib/i18n';
import ShopNavbar from '@/components/shop/ShopNavbar';
import RadikalHeroSection from '@/components/shop/RadikalHeroSection';
import PoliceTrust from '@/components/shop/PoliceTrust';
import StatsStrip from '@/components/shop/StatsStrip';
import ServiceGrid from '@/components/shop/ServiceGrid';
import VehicleCategories from '@/components/shop/VehicleCategories';
import FoxRacingShowcase from '@/components/shop/FoxRacingShowcase';
import PartsCategories from '@/components/shop/PartsCategories';
import BrandsBar from '@/components/shop/BrandsBar';
import ReviewCards from '@/components/shop/ReviewCards';
import AboutOwner from '@/components/shop/AboutOwner';
import BookingForm from '@/components/shop/BookingForm';
import DarkBookingCTA from '@/components/shop/DarkBookingCTA';
import ShopFooter from '@/components/shop/ShopFooter';
import ExamPromoSection from '@/components/shared/ExamPromoSection';

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
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <ShopNavbar shop={shop} lang={lang} onToggleLang={handleLangToggle} />
      <RadikalHeroSection shop={shop} lang={lang} />
      <PoliceTrust lang={lang} />
      <StatsStrip shop={shop} lang={lang} />
      <ServiceGrid shop={shop} lang={lang} />
      <VehicleCategories lang={lang} accentColor={shop.accentColor} />
      <FoxRacingShowcase lang={lang} accentColor={shop.accentColor} />
      <PartsCategories lang={lang} accentColor={shop.accentColor} />
      <BrandsBar lang={lang} accentColor={shop.accentColor} />
      <ReviewCards shop={shop} lang={lang} />
      <AboutOwner shop={shop} lang={lang} />
      <BookingForm shop={shop} lang={lang} />
      <DarkBookingCTA shop={shop} lang={lang} />
      <ExamPromoSection lang={lang} accentColor={shop.accentColor} />
      <ShopFooter shop={shop} lang={lang} />
    </div>
  );
}
