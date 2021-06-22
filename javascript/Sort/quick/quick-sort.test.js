'use strict';

const quickSort = require('./quick-sort.js');

describe('Quick Sort ', () => {
  it('Should throw an error if the input is not array', () => {
    expect(() => {
      quickSort(12358);
    }).toThrow();
  });
  it('HAPPY PATH , Should return sorted array', () => {
    let testArray = [20, 2, 6, 8, 6, 8];
    expect(quickSort(testArray).length).toEqual(6);
    expect(quickSort(testArray,0,5)).toEqual([2, 6, 6, 8, 8, 20]);
  });
});
