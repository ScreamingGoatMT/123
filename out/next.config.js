/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ← ensure this line is here
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
