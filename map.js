/**
 * 实现数组 Array.prototype.map((item, index, arr) => {}, context) 方法
 */

Array.prototype.uniqueMap = function(callback, context) {
    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`);
    }
    let i = 0,
        arr = [],
        { length: len } = this;
    for(; i < len; i++) {
        const result = callback.call(context, this[i], i, this);
        arr.push(result);
    }
    return arr;
 }

let arr = [1, 2, 3];
let other = [8];
const arrVal = arr.uniqueMap(item => ++item );
console.log(arrVal);
// 改变 this 指向
const otherVal = other.uniqueMap(item => ++item );
console.log(otherVal);