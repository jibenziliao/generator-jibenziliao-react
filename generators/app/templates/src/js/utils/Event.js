/**
 *
 * @author keyy/1501718947@qq.com 17/3/8 21:54
 * @description
 */
'use strict';

let Event = {};

Event.stop = (e) => {
  if (!e) {
    return;
  }
  if (e.preventDefault) {
    e.preventDefault();
  }
  if (e.stopPropagation) {
    e.stopPropagation();
  }
};

export default Event;
