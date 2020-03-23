import Vue from 'vue';
import DialogComponent from './components/DialogPlain/index.vue';


class DialogCom {
  constructor(options) {
    this.parent = options.el || document.createElement('div');
    const DialogConstructor = Vue.extend(DialogComponent);
    this.instance = new DialogConstructor({
      el: this.parent,
    });
    Object.assign(this.instance, {
      title: options.title,
      content: options.content || '弹窗内容',
      className: options.className || '',
      okText: options.okText || '确定',
      cancelText: options.cancelText || '取消',
      afterClose: this.hide.bind(this),
      handleOk: options.handleOk || DialogCom.handleOk,
    });
    return this;
  }

  show() {
    document.body.appendChild(this.instance.$el);
    const inst = this.instance;
    Vue.nextTick(() => {
      inst.visible = true;
    });
  }

  hide() {
    this.instance.$el.parentNode.removeChild(this.instance.$el);
  }

  static handleOk() {
    return true;
  }

  static removeDom(event) {
    if (event.target.parentNode) {
      event.target.parentNode.removeChild(event.target);
    }
  }
}
const Dialog = (options = {}) => {
  const Dia = new DialogCom(options);
  Dia.show();
  return Dia;
};

export default Dialog;
