'use strict';

function insertionSort(arr) {
  //check if the input array or not
  if (!Array.isArray(arr)) throw 'Invalid input';
  for (let i = 1; i < arr.length; i++) {
    // Choosing the first element in our unsorted subarray
    let current = arr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

module.exports = insertionSort;
