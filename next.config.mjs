/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['vercel.com'],
    // Using Vercel's image optimization instead of disabling optimization
    unoptimized: false,
  },
  // Optimizing for production builds on Vercel
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
}

export default nextConfig
