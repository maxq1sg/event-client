/** @type {import('next').NextConfig} */

const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ["localhost:4000"],
  },
  async rewrites() {
    return [
      {
        source: "/static/:slug*",
        destination: "http://localhost:4000/static/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;
