const path = require('path')
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import '@/styles/globals.scss';`
  },
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: process.env.NODE_ENV === 'development'
    }
  },
  i18n
}

module.exports = nextConfig
