/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["source.unsplash.com"],
  },
};

module.exports = nextConfig;
