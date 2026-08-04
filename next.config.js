/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  transpilePackages: ['framer-motion'],
}

module.exports = nextConfig