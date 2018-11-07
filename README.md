# dragin-resize
拖拽边框，改变元素大小

### 在项目中安装
```bash
npm install jo-dragin-resize --save
# 或
yarn add jo-dragin-resize
```

### 使用
```js
import util from 'jo-util';
import DraginResize from './dragin-resize.js';

new DraginResize(util.getEls('.box')[0], {
  clone: true,
  start(x, y) {
    console.log('start', x, y);
  },
  move(info) {
    console.log('move', info);
  },
  end(info) {
    console.log('end', info);

    if (info.dir == 'ver') {
      this.elem.style.height = info.height + 'px';
    }
    else if (info.dir == 'hor') {
      this.elem.style.width = info.width + 'px';
    }
  }
})
```
