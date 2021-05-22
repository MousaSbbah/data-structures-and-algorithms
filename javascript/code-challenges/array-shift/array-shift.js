'use strict';
/**
 * @param  {Array} arr
 * @param  {any} val
 */
function insertShiftArray(arr, val) {
  // calculate the middle index
  let mid = Math.ceil(arr.length / 2);
  let newArr = [];

  // push the first half
  for (let i = 0; i < mid; i++) {
    newArr[i] = arr[i];
  }
  // push the input value
  newArr[mid] = val;
  //push the last half
  for (let i = mid + 1; i <= arr.length; i++) {
    newArr[i] = arr[i - 1];
  }
  return newArr;
}

console.log(insertShiftArray([1, 2, 3, 4, 5, 6, 7], 0));
