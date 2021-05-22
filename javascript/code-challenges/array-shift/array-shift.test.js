const insertShiftArray = require('./array-shift.js');

describe('insertShiftArray', () => {
  it('Should push the input to the middle and shift the array', () => {
    let arr = [1, 2, 3, 4, 6, 7, 8, 9];
    expect(insertShiftArray(arr, 5)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
