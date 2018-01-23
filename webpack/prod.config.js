const merge      = require('webpack-merge');
const baseConfig = require('./base.config.js');

let path;

path = '';
path = __filename,
path = path.split('\\');
path.splice(-2, 2);
path.push('public');
path = path.join('\\');

module.exports = merge(baseConfig, {
  output: {
    path: path,
    publicPath: '/',
    filename: 'bundle.js'
  }
});