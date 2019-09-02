/**
 * 二分法查找
 * 从中间按区间查找
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