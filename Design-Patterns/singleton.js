/**
 * 一般实现
 */
function Singleton() {
  // todo
  this.instance = null
}

Singleton.getInstance = function() {
  if (!this.instance) {
    this.instance = new Singleton()
  }
  return this.instance
}
/**
 * class实现
 */
class Singleton {
  constructor() {
    //__init__
    this.instance = null
  }
  // init(){}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton()
    }

    return this.instance
  }
}
/**
 * 闭包实现
 */
const Singleton = (function () {
  let instance = null;

  return function () {
    if (instance) {
      return instance;
    }
    // 你的业务逻辑

    return instance = this;
  }
})();
