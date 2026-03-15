import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = 'https://moto-growth-platform.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Disallow internal utility pages and API routes
        disallow: ['/api/', '/qr'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
