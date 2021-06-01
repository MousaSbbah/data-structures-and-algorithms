'use strict';

const multiBracketValidation = require('./multi-bracket-validation');

describe('Happy paths', () => {
  it('should return true whe the input {}(){}', () => {
    expect(multiBracketValidation('{}(){}')).toBe(true);
  });
  it('should return true whe the input ()[[Extra Characters]]', () => {
    expect(multiBracketValidation('()[[Extra Characters]]')).toBe(true);
  });
  it('should return true whe the input (){}[[]]', () => {
    expect(multiBracketValidation('(){}[[]]')).toBe(true);
  });
  it('should return true whe the input {}{Code}[Fellows](())', () => {
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBe(true);
  });
  it('should return false whe the input [({}]', () => {
    expect(multiBracketValidation('[({}]')).toBe(false);
  });
  it('should return false whe the input (](', () => {
    expect(multiBracketValidation('(](')).toBe(false);
  });
  it('should return false whe the input {(})', () => {
    expect(multiBracketValidation('{(})')).toBe(false);
  });
});

describe('edge cases', () => {
  it('should throw error if the type of input is a Number', () => {
    expect(() => {
      multiBracketValidation(123456);
    }).toThrow();
  });
  it('should throw error if the type of input is a array', () => {
    expect(() => {
      multiBracketValidation([]);
    }).toThrow();
  });
});
