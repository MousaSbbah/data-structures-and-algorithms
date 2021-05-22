'use strict';

function binarySearch(arr, target){
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let index = Math.ceil((start + end) / 2);
    if (arr[index] === target) {
      return index;
    }
    if (arr[index] < target) {
      start = index + 1;
    }
    if(arr[index] > target) {
      end = index - 1;
    }
  }
  return -1;
}

let exampleArray = [1, 3, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

module.exports=binarySearch;
console.log(binarySearch(exampleArray,37));

