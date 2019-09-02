/* 利用对象key唯一性去重 */
// 元素作 key 和 vlue，获取所有的 value
function unique(arr) {
    let map = {};
    arr.forEach(item => {
        map[item]  = item;
    })
    return [...Object.values(map)]; // keys 获得的是字符
}
// 元素作 key 并设置状态
function unique1(arr) {
    let map = {},
        newArr = [];
    arr.forEach(item => {
        if (!map[item]) {
            map[item] = true;
            newArr.push(item);
        }
    })
    return newArr;
}

const arr = [1, 2, 1, 3, 5, 2];

console.log(unique(arr));
console.log('unique1: ', unique1(arr));

/* 查找字符中重复次数最多的字母 */

function findMaxDuplicateChar(str) {
    const len = str.length;
    if (len === 1) return str;
    let map = {},
        i = 0;
    for(; i < len; i++) {
        const cur = str[i];
        if (!map[cur]) {
            map[cur] = 1;
        } else {
            map[cur] += 1;
        }
    }
    let maxStr = '',
        maxVal = 1;
    for(let key in map) {
        if (map[key] > maxVal) {
            maxStr = key;
            maxVal = map[key];
        }
    }
    return {
        str: maxStr,
        num: maxVal
    }

}
const str = 'afjghdfraaaasdenas';

console.log(findMaxDuplicateChar(str));