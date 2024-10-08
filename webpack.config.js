const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import the plugin

module.exports = {
  entry: './src/index.js',  // Update this path to point to your main JavaScript file
  output: {
    filename: 'bundle.js',  // The output file after bundling
    path: path.resolve(__dirname, 'dist'),  // The directory where the bundle will be saved
    publicPath: '/',
  },
  devServer: {
    static: [{
      directory: path.join(__dirname, 'dist'),
    },
    {
      directory: path.join(__dirname, 'public'),  // Serve static files from public
      publicPath: '/public',  // Serve public folder contents under /public path
    }],
    compress: true,  // Enable gzip compression
    port: 9000,  // The port to run the server on (you can change it)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Assuming you are using Babel for transpiling
        },
      },
      {
        test: /\.css$/,  // Example for handling CSS files
        use: ['style-loader', 'css-loader'],
      },
      // Add more loaders as necessary for other file types (e.g., images, fonts)
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your index.html file
      filename: 'index.html', // The name of the output file in dist
    }),
  ],
  mode: 'development',  // Set mode to development
};
