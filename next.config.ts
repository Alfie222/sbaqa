import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/draft-mode/enable',
        destination: '/',
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig

