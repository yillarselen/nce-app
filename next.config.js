/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    appDir: true,
  },
  images: {
    domains: ["source.unsplash.com"],
  },
};

module.exports = nextConfig;
