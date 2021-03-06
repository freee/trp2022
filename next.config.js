/** @type {import('next').NextConfig} */
const urlPrefix = process.env.URL_PREFIX ? `/${process.env.URL_PREFIX}` : '';
const nextConfig = {
  reactStrictMode: true,
  // i18n: { locales: ['ja'], defaultLocale: 'ja' }
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: {
    urlPrefix,
  },
}

module.exports = nextConfig
