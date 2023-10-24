/** @type {import('next').NextConfig} */
/** Only needed if hosted on github pages URL: https://user.github.io/repo/
 * Also uncomment the assetPrefix and basePath below
 * const repo = 'repo'
 * const assetPrefix = `/${repo}/`
 * const basePath = `/${repo}`
*/

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // assetPrefix: assetPrefix,
  // basePath: basePath

  webpack: (config, { isServer, dev }) => {
    // Enable source maps in dev
    if (dev) {
      config.devtool = 'eval-source-map';
    }

    /**
    // Enable source maps in production
      config.devtool = 'source-map';
      for (const plugin of config.plugins) {
        if (plugin.constructor.name === 'TerserPlugin') {
          plugin.options.sourceMap = true;
          break;
        }
      }
    }
    */

    return config;
  },
};

module.exports = nextConfig;