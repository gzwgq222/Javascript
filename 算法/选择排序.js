/**
 * 选择排序
 * 最小的排前面
 */  

function selectionSort (arr) {
  const len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    let min = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // min 为当前 i 则不用交换位置
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
}
let arr = [8,94,15,88,55,76,21,39];

selectionSort(arr);
console.log(arr)