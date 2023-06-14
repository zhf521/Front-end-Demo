const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/login/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './login/index.js',
    clean: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/login.html'),
      filename: path.resolve(__dirname, 'dist/login/index.html'),
    }),
    new miniCssExtractPlugin({
      filename: './login/index.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use:["style-loader","css-loader"],
        use: [
          process.env.NODE_ENV === 'development'
            ? 'style-loader'
            : miniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.less$/i,
        use: [
          process.env.NODE_ENV === 'development'
            ? 'style-loader'
            : miniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
}
