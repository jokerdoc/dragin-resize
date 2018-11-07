import util from 'jo-util';
import DraginResize from './dragin-resize.js';

new DraginResize(util.getEls('.box')[0], {
  clone: true,
  start(x, y) {
    console.log('start', x, y);
  },
  move(obj) {
    console.log('move', obj);

    console.log(this);
  },
  end() {
    console.log('end');
  }
})
