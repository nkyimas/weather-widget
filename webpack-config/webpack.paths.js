const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  dist: path.resolve(__dirname, '../dist'),

  //Public path
  public: path.resolve(__dirname, '../public'),
}
