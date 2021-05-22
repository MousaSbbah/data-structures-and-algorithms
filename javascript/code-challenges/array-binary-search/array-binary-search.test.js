const binarySearch = require('./array-binary-search');
// @ponicode
describe('binarySearch', () => {
  it('should return the index of the target ', () => {
    expect(
      binarySearch(
        [1, 3, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59],
        37
      )
    ).toEqual(9);
  });
});
