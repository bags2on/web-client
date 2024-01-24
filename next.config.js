const path = require('path')
const { i18n } = require('./next-i18next.config')
const loaderUtils = require('loader-utils')

// https://stackoverflow.com/questions/66744765/how-to-hash-css-class-names-in-nextjs/69166434#69166434
const hashOnlyIdent = (context, _, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, '/')}#className:${exportName}`
      ),
      'md4',
      'base64',
      6
    )
    .replace(/[^a-zA-Z0-9-_]/g, '_')
    .replace(/^(-?\d|--)/, '_$1')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use))

    if (!options.dev)
      rules.forEach((rule) => {
        rule.use.forEach((moduleLoader) => {
          if (
            moduleLoader.loader?.includes('css-loader') &&
            !moduleLoader.loader?.includes('postcss-loader')
          )
            moduleLoader.options.modules.getLocalIdent = hashOnlyIdent

          // earlier below statements were sufficient:
          // delete moduleLoader.options.modules.getLocalIdent;
          // moduleLoader.options.modules.localIdentName = '[hash:base64:6]';
        })
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
    prependData: `@import '@/styles/scss-globals.scss';`
  },
  i18n
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(nextConfig)
