const path = require('path')

module.exports = {
  reactStrictMode: true,
}
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, crypto: false, http: false, stream: false };
    return config;
  },
};