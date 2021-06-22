"use strict";

function quickSort(arr, left, right) {
  if (!Array.isArray(arr)) throw "Error : The input in not an Array";
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(arr, index, right);
    }
  }
  return arr;
  function swap(arr, leftIndex, rightIndex) {
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
  }
  function partition(arr, left, right) {
    let pivot = arr[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(arr, i, j); //sawpping two elements
        i++;
        j--;
      }
    }
    return i;
  }
}



module.exports = quickSort;
