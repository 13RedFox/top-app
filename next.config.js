// const withReactSvg = require('next-react-svg')
// const path = require('path')

// module.exports = withReactSvg({
//   include: path.resolve(__dirname, 'src/assets/svg'),
//   webpack(config, options) {
//     return config
//   }
// });

module.exports = {
  reactStrictMode: true,
};

const withSass = require('@zeit/next-sass');
module.exports = withSass();

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
