/** @type {import('next').NextConfig} */
/** Only needed if hosted on github pages URL: https://user.github.io/tinyswap/
 * Also uncomment the assetPrefix and basePath below
 * const repo = 'tinyswap'
 * const assetPrefix = `/${repo}/`
 * const basePath = `/${repo}`
*/

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // assetPrefix: assetPrefix,
  // basePath: basePath
};

module.exports = nextConfig;