/**
 * 冒泡排序
 * 一次比较相邻的元素，大或小的往后排 
 */

function sortarr(arr){
    let count = 0;
    for(i = 0; i < arr.length-1; i++){
      console.log(i);
        for(j = 0; j < arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
            count++;
        }
    }
    console.log(`循环次数为:${count}次`);
    return arr;
}
let arr = [8,94,15,88,55,76,21,39];
sortarr(arr);
console.log(arr)
