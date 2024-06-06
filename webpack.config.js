const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust if your entry file is located elsewhere

  output: {
    path: path.resolve(__dirname, 'dist'), // This will output compiled files to the 'dist' directory
    filename: 'bundle.js', // The name of the compiled JavaScript file
  },

  resolve: {
    fallback: {
      "util": require.resolve("util/"),
      "stream": require.resolve("stream-browserify"),
      "url": require.resolve("url/"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "assert": require.resolve("assert/")
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Matches both .js and .jsx files
        exclude: /node_modules/, // Exclude dependencies
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },

  mode: 'development', // Set the mode to 'development' or 'production'
};
