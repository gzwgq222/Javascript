/**
 * foreach 能否改变数组
 * 中间创建了一个临时变量
 * 基础数据类型不能改变
 * 复杂数据类型能改变（指针不变，指向的是内存中的同一个地址）
 */

let map = [{name: 1}, {name: 2}, {name: 3}, {name: 4}];
let single = [1, 2, 3, 4];

map.forEach(item => {
    item.name = '彬彬不讲理';
});
single.forEach(item => {
    item = '小猪仔'
});

console.log(map);
console.log(single);

let A = {
    price: 888
}
let B = A;
A = {
    good: '2322'
}
console.log(B)
