/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/blog/digital-marketing-agency-for-schools',
        destination: '/digital-marketing-agency-for-schools',
        permanent: true,
      },
      {
        source: '/blog/digital-marketing-agency-for-fashions',
        destination: '/digital-marketing-agency-for-fashions',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/digital-marketing-services',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/digital-marketing-blog',
        permanent: true,
      },
      {
        source: '/digital-marketing-blog/digital-marketing-agency-for-schools',
        destination: '/digital-marketing-agency-for-fashions',
        permanent: true,
      },
      {
        source: '/digital-marketing-blog/digital-marketing-agency-for-fashions',
        destination: '/digital-marketing-agency-for-fashions',
        permanent: true,
      },
      {
        source: '/digital-marketing-blog/digital-marketing-agency-for-fmcg',
        destination: '/digital-marketing-agency-for-fmcg',
        permanent: true,
      },
      {
        source: '/digital-marketing-blog/digital-marketing-agency-for-solar',
        destination: '/digital-marketing-agency-for-solar',
        permanent: true,
      },
    ];
  },  
};

module.exports = nextConfig;
