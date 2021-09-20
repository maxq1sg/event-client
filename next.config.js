/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ["localhost:4000"],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
