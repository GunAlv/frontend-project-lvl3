const path = require('path');
const distPath = path.resolve(__dirname, 'dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const packageJSON = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: distPath,
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'entry',
                corejs: packageJSON.dependencies['core-js'],
                modules: 'auto',
              }],
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer'),
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: distPath,
      watch: true,
    },
    port: 8080,
    hot: true,
  },
  cache: !isProduction,
};
