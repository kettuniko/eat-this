module.exports = {
  entry: './src/main.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
