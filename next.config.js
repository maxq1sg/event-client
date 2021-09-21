/** @type {import('next').NextConfig} */

const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ["localhost:4000"],
  },
  async rewrites() {
    return [
      {
        source: "/hello",
        destination: "http://localhost:4000/api/events",
      },
    ];
  },
};
