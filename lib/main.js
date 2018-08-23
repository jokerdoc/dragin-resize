import util from 'lemon-util';
import DraginResize from './dragin-resize.js';

new DraginResize(util.getEls('.box')[0], {
  clone: true,
  start(x, y) {
    console.log('start', x, y);
  },
  move(x, y) {
    console.log('move', x, y);
  },
  end() {
    console.log('end');
  }
})
