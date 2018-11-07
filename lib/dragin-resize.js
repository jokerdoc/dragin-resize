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

    let w = null;
    let sx = null; // 开始x位置
    new Dragin(this.el, {
      dir: 'hor',
      start: (x, y) => {
        w = this.elem.offsetWidth;
        sx = x;

        this.createDashedBox( util.getClientRect(this.elem) );
      },
      move: (x, y) => {
        // this.elem.
        // w = w + (x - sx);
        // console.log(w);

        this.dashedBox.style.width = w + (x - sx) + 'px';
        this.callback.move.call(this, { dir: 'hor', value: x });
      },
      end: (x, y) => {
        // this.elem.style.width = this.dashedBox.offsetWidth + 'px';
        this.removeDashedBox();
        this.callback.end.call(this, x, y);
      }
    });
  }

  createVer() {
    this.el = document.createElement('div');
    util.addClass(this.el, 'dragin-resize-ver');
    this.elem.appendChild(this.el);

    let h = null;
    let sy = null; // 开始y位置
    new Dragin(this.el, {
      dir: 'ver',
      start: (x, y) => {
        h = this.elem.offsetHeight;
        sy = y;

        this.createDashedBox( util.getClientRect(this.elem) );
      },
      move: (x, y) => {
        this.dashedBox.style.height = h + (y - sy) + 'px';
        this.callback.move.call(this, { dir: 'ver', value: y });
      },
      end: (x, y) => {
        // this.elem.style.height = this.dashedBox.offsetHeight + 'px';
        this.removeDashedBox();
        this.callback.end.call(this, x, y);
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
