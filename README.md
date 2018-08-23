# dragin-resize
拖拽边框，改变元素大小

### 在项目中安装
```bash
npm install lemon-dragin-resize --save
# 或
yarn add lemon-dragin-resize
```

### 使用
```js
import DraginResize from 'lemon-dragin-resize';

new DraginResize(docment.querySelector('#box'), {
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
```
