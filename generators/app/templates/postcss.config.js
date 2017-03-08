/**
 *
 * @author keyy/1501718947@qq.com 17/3/8 20:54
 * @description
 */
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['last 5 versions']
    })
  ]
};
