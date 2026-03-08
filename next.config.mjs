/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // dynamikperformance.com (apex + www) → /dynamik
        {
          source: '/',
          has: [{ type: 'host', value: '(www\\.)?dynamikperformance\\.com' }],
          destination: '/dynamik',
        },
        // radikalmotosport.com (apex + www) → /radikal
        // Must be listed before the subdomain catch-all below
        {
          source: '/',
          has: [{ type: 'host', value: '(www\\.)?radikalmotosport\\.com' }],
          destination: '/radikal',
        },
        // Any subdomain of radikalmotosport.com → /exam
        // e.g. ride.radikalmotosport.com
        {
          source: '/',
          has: [{ type: 'host', value: '.+\\.radikalmotosport\\.com' }],
          destination: '/exam',
        },
      ],
    };
  },
};

export default nextConfig;
