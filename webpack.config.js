const path = require('path');

module.exports = {
  entry:'./src/index.js',
 
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:"/webpack-demo"
  },
 
  mode: 'production',
};