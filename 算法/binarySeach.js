/**
 * 二分法查找
 * 从中间按区间查找
 * 时间复杂度最小为O(1),第一个就找到要找的数
 * 时间复杂度最大为O(log2 n)，最后一次找到要找的数
*/

function binarySeach(arr, num) {
    let front = 0,
          end = arr.length - 1;
    while (front <= end) {
        let mid = Math.floor((front + end) / 2);
        if (arr[mid] === num) return mid;
        if (arr[mid] > num) {
            end = mid - 1;
        } else {
            front = mid + 1;
        }
    };
    return -1;
}
var ary=[1,4,7,8,12,34,67,88,99,100]

console.log(binarySeach(ary, 4))