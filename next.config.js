/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  images: {
    domains: ['dry-guys-damage-restoration-fort-worth.com', 'maps.googleapis.com'],
    unoptimized: process.env.NODE_ENV === 'development',
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/:path((?!api|_next|.*\\..*).*[^\/])',
        destination: '/:path/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
