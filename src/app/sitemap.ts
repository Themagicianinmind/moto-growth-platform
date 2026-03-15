import { MetadataRoute } from 'next';

// Base URLs — covers both the Vercel deployment and future custom domains
// Update BASE_URL when DNS is pointed to custom domains
const BASE_URL = 'https://moto-growth-platform.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // ─── ROOT ──────────────────────────────────────────────────────────────────
  const root: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];

  // ─── DYNAMIK PERFORMANCE ──────────────────────────────────────────────────
  const dynamik: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/dynamik`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/dynamik/vespa`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/dynamik/promotions`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/dynamik/about`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/dynamik/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    // Dynamik service pages (SEO targets)
    {
      url: `${BASE_URL}/dynamik/services/repair`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/dynamik/services/maintenance`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dynamik/services/vespa-sales`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/dynamik/services/modifications`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/dynamik/services/towing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/dynamik/services/winter-storage`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // ─── RADIKAL MOTOSPORT ────────────────────────────────────────────────────
  const radikal: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/radikal`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/radikal/fox-racing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/radikal/promotions`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/radikal/about`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/radikal/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    // Radikal service pages (SEO targets)
    {
      url: `${BASE_URL}/radikal/services/motorcycle-repair`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/radikal/services/atv-utv`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/radikal/services/motocross`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/radikal/services/snowmobile`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/radikal/services/boat`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/radikal/services/inspection`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/radikal/services/winter-storage`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // ─── MARKETPLACE ─────────────────────────────────────────────────────────
  const marketplace: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/marketplace`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/marketplace/sell`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // ─── EXAM APP ─────────────────────────────────────────────────────────────
  const exam: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/exam`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return [...root, ...dynamik, ...radikal, ...marketplace, ...exam];
}
