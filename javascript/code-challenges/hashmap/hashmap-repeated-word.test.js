'use strict';

const repeatedWord = require('./hashmap-repeated-word');

describe('repeatedWord -- > Edge cases', () => {
  it('Should throw error if the input not string', () => {
    expect(() => {
      repeatedWord(5);
    }).toThrow();
  });

  it('-no repeated word - it should return \'there is no repeated word\' ', () => {
    expect(repeatedWord('Hello World')).toEqual('there is no repeated word');
  });
});
describe('repeatedWord ---> Happy Path', () => {
  it('return first repeated word', () => {
    expect(
      repeatedWord('Once upon a time, there was a brave princess who.')
    ).toEqual('a');
  });
  it('return first repeated word', () => {
    expect(
      repeatedWord(
        'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York'
      )
    ).toEqual('summer');
  });
  it('return first repeated word', () => {
    expect(
      repeatedWord(
        'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only'
      )
    ).toEqual('it');
  });
});

