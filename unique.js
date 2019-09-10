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
    if (!str || str.length === 1) return str;
    const len = str.length;
    let dict = {},
        i = 0,
        char = '',
        max = 0;
    for(; i < len; i++) {
        const cur = str[i];
        dict[cur] ? dict[cur] += 1 :  dict[cur] = 1
        if (dict[cur] > max) {
            char = cur;
            max = dict[cur];
        }
    }
    return {
        char,
        max
    }

}
// other
function findMaxLetter (str) {
    let maxLetter = ''
    let maxLen = 0
    let key = {}
    str.split('').forEach(item => {
      key[item] ? key[item]++ : key[item] = 1
      if (key[item] > maxLen) {
        maxLen = key[item]
        maxLetter = item
      }
    })
  
    return [maxLetter, maxLen]
  }
const str = 'afjghdfraaaasdenas';

console.log(findMaxDuplicateChar(str));

const arr2 = [10,5,11,7,8,9];
// console.log(Math.max.apply(null, arr2) - Math.min.apply(null, arr2))
console.log('max：', findMaxLetter(str))