// 三种状态
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
// 判断是否为 function
const isFunction = variable => typeof variable === 'function';
// 定义 myPromise 函数
class myPromise {
    constructor (handle) {
        if (!isFunction(handle)) {
            throw new error('MyPromise must accept a function as a parameter')
        }
        // 添加状态
        this._status = PENDING;
        // 添加值
        this._value = undefined;
        this._fulfilledQueues = [];
        this._rejectedQueues = [];
        // 执行 handle
        try {
            handle(this._resolve.bind(this), this._reject.call(this))
        } catch (err) {
            this._reject(err)
        }
    }
    _resolve (val) {
        if (this._status !== PENDING) return
        const run = _ => {
            this._status = FULFILLED;
            this._value = val;
            let cb;
            while (cb = this._fulfilledQueues.shift()) {
                cb(val)
            }
        }
        // 为了支持同步的 promise，这里采用异步调用（同步执行完，再执行 _fulfilledQueues 队列中的回调函数）
        setTimeout(run, 0);
    }
    _reject (err) {
        if (this._status !== PENDING) return
        const run = _ => {
            this._status = REJECTED;
            this._value = err;
            let cb;
            while (cb = this._rejectedQueues.shift()) {
                cb(val)
            }
        }
        setTimeout(run, 0);
    }
    // 定义 then
    then (onFulfilled, onReject) {
        const { _status, _val } = this;
        switch (_status) {
            case PENDING:
                this._fulfilledQueues.push(onFulfilled);
                this._rejectedQueues.push(onReject);
                break;
            case FULFILLED:
                onFulfilled(_val);
                break;
            case REJECTED:
                onReject(_val);
                break;
        }
        return new myPromise((onFulfilledNext, onRejectNext) => {
            // 成功时执行的函数
            let fulfilled = val => {
                try {
                    // 不是函数
                    if (!isFunction(val)) {
                        onFulfilledNext(val);
                    } else {
                        const res = onFulfilled(val);
                        // 为 promise，必须等待 promise 状态改变才能执行 onFulfilledNext onRejectNext 回调
                        if (res instanceof myPromise) {
                            res.then(onFulfilledNext, onRejectNext);
                        } else {
                            onFulfilledNext(res);
                        }
                    }
                } catch (err) {
                    onRejectNext(err);
                }
            };
            // 失败时执行的函数
            let rejected = val => {
                try {
                    if (!isFunction(val)) {
                        onRejectNext(val);
                    } else {
                        const res = onReject(val);
                        if (res instanceof myPromise) {
                            res.then(null, onRejectNext);
                        } else {
                            onRejectNext(res);
                        }
                    }
                } catch (err) {
                    onRejectNext(err);
                }
            }
            // 根据状态执行
            switch (_status) {
                case PENDING:
                    this._fulfilledQueues.push(onFulfilledNext);
                    this._rejectedQueues.push(onRejectNext);
                    break;
                case FULFILLED:
                    fulfilled(_val);
                    break;
                case REJECTED:
                    rejected(_val);
                    break;
            }
        })
    }
}
