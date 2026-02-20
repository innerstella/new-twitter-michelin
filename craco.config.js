const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('postcss-preset-env')({
          stage: 3,
          features: {
            'nesting-rules': true
          }
        })
      ]
    }
  },
  webpack: {
    configure: (webpackConfig) => {
      // Remove existing CSS minimizer plugins
      webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.filter(
        (plugin) => !(plugin instanceof CssMinimizerPlugin)
      );

      // Add CSS minimizer with custom cssnano config
      webpackConfig.optimization.minimizer.push(
        new CssMinimizerPlugin({
          minify: CssMinimizerPlugin.cssnanoMinify,
          minimizerOptions: {
            plugins: [
              ['default', { calc: false }],
            ],
          },
        })
      );

      return webpackConfig;
    },
  },
};
