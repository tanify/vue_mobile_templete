import Vue from 'vue';
import ToastComponent from './toast.vue';


class ToastCom {
  constructor(options) {
    this.text = options.text || 'toast';
    this.duration = options.duration || 3000;
    this.parent = options.el || document.createElement('div');
    this.rootDom = document.body;
    const ToastConstructor = Vue.extend(ToastComponent);
    this.toastInst = new ToastConstructor({
      el: this.parent,
    });
    this.toastInst.message = this.text;
    this.toastInst.className = options.className || '';
    this.timer = null;
    return this;
  }

  show() {
    document.body.appendChild(this.toastInst.$el);
    const inst = this.toastInst;
    const $this = this;
    Vue.nextTick(() => {
      inst.visible = true;
      $this.timer = setTimeout(() => {
        $this.hide();
        clearTimeout($this.timer);
      }, $this.duration);
    });
  }

  hide() {
    // this.toastInst.$el.addEventListener('transitionend', ToastCom.removeDom);
    this.toastInst.visible = false;
    // clearTimeout(this.timer);
  }

  static removeDom(event) {
    if (event.target.parentNode) {
      event.target.parentNode.removeChild(event.target);
    }
  }
}
const Toast = (options = {}) => {
  let param = options;
  if (typeof options === 'string') {
    param = {
      text: options,
    };
  }
  const toast = new ToastCom(param);
  toast.show();
  return Toast;
};

export default Toast;
