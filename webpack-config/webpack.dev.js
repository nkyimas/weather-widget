const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const { merge } = require('webpack-merge')

const common = require('./webpack.common')
const paths = require('./webpack.paths')

module.exports = merge(common, {
  output: {
    path: paths.dist,
    filename: 'js/[name].js',
    clean: true,
  },
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  watch: true,

  // Spin up a server for quick development
  // devServer: {
  //   historyApiFallback: true,
  //   open: true,
  //   compress: true,
  //   hot: true,
  //   port: 8080,
  //   static: {
  //     directory: paths.src,
  //   },
  // },

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },

  plugins: [new LiveReloadPlugin()],
})
