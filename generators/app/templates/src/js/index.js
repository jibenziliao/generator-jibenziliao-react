/**
 *  index.js, the starter.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
require.ensure(['splash-screen/dist/splash.min.css', 'splash-screen'], function(require) {

  require('splash-screen/dist/splash.min.css').use();
  require('splash-screen').Splash.enable('circular');
});

require.ensure([
  '../less/main.less',
  'splash-screen',
  './utils/Entrance'
], function(require) {

  require('../less/main.less');

  var Entrance = require('./utils/Entrance').default;
  (new Entrance()).run();
});
