/**
 *
 * @author keyy/1501718947@qq.com 17/3/8 21:54
 * @description
 */
'use strict';

let UI = {};

UI.BREAK_POINT = 850;

UI.windowWidth = () => {
  let element = document.documentElement;
  let body = document.getElementsByTagName('body')[0];
  let width = window.innerWidth || element.clientWidth || body.clientWidth;
  return width;
};

export default UI;
