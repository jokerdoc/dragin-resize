/**
 * 拖拽
 */

import util from 'jo-util';
import Dragin from 'jo-dragin';
import './dragin-resize.scss';

class DraginResize {
  constructor(elem, options) {
    this.elem = elem;
    this.mirror = null;
    this.setOptions(options);
    this.setup();
  }

  // 设置配置
  setOptions({ clone = false, start = util.noop, move = util.noop, end = util.noop }) {
    this.clone = clone;
    /* let temp = dir.split(',');
    this.hasHor = temp.indexOf('hor') > -1;
    this.hasVer = temp.indexOf('ver') > -1; */
    this.callback = { start, move, end };
  }

  // 启动
  setup() {
    util.addClass(this.elem, 'dragin-resize');
    this.create();
  }

  create() {
    this.createHor();
    this.createVer();
    // this.createHorVer();
  }

  createHor() {
    this.el = document.createElement('div');
    util.addClass(this.el, 'dragin-resize-hor');
    this.elem.appendChild(this.el);

    let sw = null; // 起始宽度
    let sx = null; // 起始x位置
    let w = null;  // 拖动的宽度
    new Dragin(this.el, {
      dir: 'hor',
      start: (x, y) => {
        sw = this.elem.offsetWidth;
        sx = x;

        if (this.clone) {
          this.createDashedBox( util.getClientRect(this.elem) );
        }
      },
      move: (x, y) => {
        // this.elem.
        // w = w + (x - sx);
        // console.log(w);
        w = Math.max(sw + (x - sx), 0);

        if (this.clone) {
          this.dashedBox.style.width = w + 'px';
        }
        else {
          this.elem.style.width = w + 'px';
        }

        this.callback.move.call(this, { dir: 'hor', width: w });
      },
      end: (x, y) => {
        // this.elem.style.width = this.dashedBox.offsetWidth + 'px';
        if (this.clone) {
          this.removeDashedBox();
        }
        this.callback.end.call(this, { dir: 'hor', width: w });
      }
    });
  }

  createVer() {
    this.el = document.createElement('div');
    util.addClass(this.el, 'dragin-resize-ver');
    this.elem.appendChild(this.el);

    let sh = null; // 起始高度
    let sy = null; // 起始y位置
    let h = null;  // 拖动的宽度
    new Dragin(this.el, {
      dir: 'ver',
      start: (x, y) => {
        sh = this.elem.offsetHeight;
        sy = y;
        if (this.clone) {
          this.createDashedBox( util.getClientRect(this.elem) );
        }
      },
      move: (x, y) => {
        h = Math.max(sh + (y - sy), 0);
        if (this.clone) {
          this.dashedBox.style.height = h + 'px';
        }
        else {
          this.elem.style.height = h + 'px';
        }
        this.callback.move.call(this, { dir: 'ver', height: h });
      },
      end: (x, y) => {
        // this.elem.style.height = this.dashedBox.offsetHeight + 'px';
        if (this.clone) {
          this.removeDashedBox();
        }
        this.callback.end.call(this, { dir: 'ver', height: h });
      }
    });
  }

  createHorVer() {
    this.el = document.createElement('div');
    util.addClass(this.el, 'nw-resize');
    this.elem.appendChild(this.el);

    let w = null;
    let h = null;
    let sx = null; // 开始x位置
    let sy = null; // 开始y位置
    new Dragin(this.el, {
      start: (x, y) => {
        w = this.elem.offsetWidth;
        h = this.elem.offsetHeight;
        sx = x;
        sy = y;
      },
      move: (x, y) => {
        this.elem.style.width = w + (x - sx) + 'px';
        this.elem.style.height = h + (y - sy) + 'px';
      }
    });
  }

  createDashedBox(rect) {
    this.dashedBox = document.createElement('div');
    this.dashedBox.className = 'dragin-dashed-box';
    this.dashedBox.style.width = rect.width + 'px';
    this.dashedBox.style.height = rect.height + 'px';
    this.dashedBox.style.left = rect.left + 'px';
    this.dashedBox.style.top = rect.top + 'px';
    document.body.appendChild(this.dashedBox);
  }

  removeDashedBox() {
    document.body.removeChild(this.dashedBox);
  }
}

export default DraginResize;
