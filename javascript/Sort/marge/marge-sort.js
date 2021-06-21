'use strict';

/**
 * @param  {Array} arr
 */
const mergeSort = (arr) => {
  // check if the input is array or not
  if (!Array.isArray(arr)) throw 'Error : The input in not an Array';
  //  if the input has less than 2 indexes return the input
  if (arr.length < 2) return arr;
  //Find the middle index
  const middle = Math.floor(arr.length / 2);
  //save the left array in a variable
  const leftArray = arr.slice(0, middle);
  //save the right array in a variable
  const rightArray = arr.slice(middle, arr.length);
  /**Sort and marge tow arrays
   * @param  {Array} arr1
   * @param  {Array} arr2
   */
  const _mergeArrays = (arr1, arr2) => {
    //declare new array
    const mergedArray = [];
    //loop while the tow arrays has mor than index
    while (arr1.length && arr2.length) {
      //compare first values for each array and shift the smallest value
      mergedArray.push(arr1[0] > arr2[0] ? arr2.shift() : arr1.shift());
    }

    //if we still have values, let's add them at the end of mergedArray
    while (arr1.length) {
      mergedArray.push(arr1.shift());
    }
    while (arr2.length) {
      mergedArray.push(arr2.shift());
    }
    // return the final array
    return mergedArray;
  };
  //call the function again for the left and right array
  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);
  // merge the sorted left and right and return the result
  return _mergeArrays(sortedLeft, sortedRight);
};
module.exports=mergeSort;
