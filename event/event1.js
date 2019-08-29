/**
 * 发布-订阅模式
 * @module event
 * @param {Object} list 事件队列
 * @param {Function} on 订阅事件
 * @param {Function} emit 发布事件
 * @param {Function} remove 移除事件订阅
 */

let event = {
  list: {},
  on (key, fn) {
    if (!this.list[key]) this.list[key] = [];
    this.list[key].push(fn);
  },
  emit (...args) {
    const key = args.shift(),
          fns = this.list[key];
    if (!fns || !fns.length) return false;
    fns.forEach(cb => {
      cb.apply(this, args);
    })
  },
  remove (key, fn) {
    const fns = this.list[key];
    if (!fns) return false;
    // 不确定具体函数就全部清空
    if (!fn) {
      fns && (this.list[key] = []);
    } else {
      const index = fns.findIndex(cb => cb === fn)
      fns.splice(index, 1);
    }
  }
}

function cat() {
  console.log('一起喵喵喵');
}
function dog() {
  console.log('一起旺旺旺');
}

event.on('pet', data => {
  console.log('接收数据');
  console.log(data);
});
event.on('pet', cat);
event.on('pet', dog);
// 取消dog方法的订阅
event.remove('pet', dog);
// 发布
event.emit('pet', ['二哈', '波斯猫']);
