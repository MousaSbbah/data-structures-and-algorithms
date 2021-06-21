'use strict';

const mergeSort = require('./marge-sort');

describe('Merge Sort ', () => {
  it('Should throw an error if the input is not array', () => {
    expect(() => {
      mergeSort(12358);
    }).toThrow();
  });
  it('HAPPY PATH , Should return sorted array', () => {
    let testArray = [20, 2, 6, 8, 6, 8];
    expect(mergeSort(testArray).length).toEqual(6);
    expect(mergeSort(testArray)).toEqual([2,6,6,8,8,20]);
  });
});
