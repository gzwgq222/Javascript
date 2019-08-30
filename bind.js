/**
 * apply 实现 bind
 * call/apply立即执行
 * bind 非立即执行，所以 return function
 * context 想要修正的 this 对象
 */
// 简化版
Function.prototype.bindFn = function(context) {
    const self = this; // 保存原函数
    return function() { // 返回一个新的函数
        self.apply(context, arguments); // arguments 为 bindFn() 方法执行时的参数
    }
}
var obj = {
    name: 'sven'
}; 
var func = function(){
    console.log( this.name ); // 输出：sven
}.bindFn( obj);

func(2333); 

// 完整版
Function.prototype.newBind = function () {
    const self = this, // 保存原函数
          context = [].shift.call(arguments), // 需要绑定的 this 对象
          args = [...arguments]; // 剩余参数
    return function () {
        self.apply(context, [...args, ...arguments]); // 执行原函数 改变this 合并参数
    }
          
}
var newBindFunc = function( a, b, c, d ){
    console.log( this.name ); // 输出：sven
    console.log( [ a, b, c, d ] ) // 输出：[ 1, 2, 3, 4 ]
}.bind( obj, 1, 2 );

newBindFunc( 3, 4 ); 