const path = require('path');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  externals: {
    jquery: 'jQuery',
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: { limit: 100, outputPath: 'img' },
      },
      {
        test: /\.(svg|ttf|woff|woff2|otf|eot)$/i,
        loader: 'file-loader',
        options: { limit: 100, outputPath: 'fonts' },
      },
      {
        test: /\.njk$/,
        loader: 'nunjucks-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false } }, { loader: 'sass-loader' }],
      },
    ],
  },
  plugins: [
    new NunjucksWebpackPlugin({
      templates: [
        {
          from: './src/index.njk',
          to: 'index.html',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyPlugin({
      patterns: [{ from: './src/static', to: './' }],
    }),
  ],
};
