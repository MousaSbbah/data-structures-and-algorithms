'use strict';
const insertionSort = require('./insertion-sort');

describe('Insertion Sort ', () => {
  it('should throw error if the input is not an array', () => {
    expect(() => {
      insertionSort(25);
    }).toThrow();
  });
  it('HAPPY PATH ,should return sorted array ', () => {
    const array = [6, 4, -1, 3, 4, 7];
    insertionSort(array);
    expect(array.length).toEqual(6);
    expect(array).toEqual([-1, 3, 4, 4, 6, 7]);
  });
});
