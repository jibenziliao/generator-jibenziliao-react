/**
 *  Entrance.js launch the application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 **/
import {Splash} from 'splash-screen';
import React from 'react';
import ReactDOM from 'react-dom';
import Application from '../app/Application.jsx';

class Entrance {

  constructor() {}

  //如果使用了material-ui框架，则需要注入点击事件插件
  beforeStart() {
    //let injectTapEventPlugin = require('react-tap-event-plugin');
    //Needed for onTouchTap
    //Can go away when react 1.0 release
    //Check this repo:
    //https://github.com/zilverline/react-tap-event-plugin
    //injectTapEventPlugin();
  }

  _destroySplash() {
    let _this = this;
    Splash.destroy();
    require('splash-screen/dist/splash.min.css').unuse();
    setTimeout(function() {
      if (Splash.isRunning()) {
        _this.destroySplash();
      }
    }, 100);
  }

  launch() {
    ReactDOM.render(<Application />, document.querySelector('#view'));
  }

  run() {
    this.beforeStart();
    this._destroySplash();
    this.launch();
  }

}

export default Entrance;
