const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

module.exports = {
  devtool: 'source-map',
  context: srcPath,
  entry: path.join(srcPath, 'js', 'app.js'),
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'data'),
        to: path.join(buildPath, 'data'),
      },
    ])
  ],
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015']
            }
          },
      ]
  },
};
