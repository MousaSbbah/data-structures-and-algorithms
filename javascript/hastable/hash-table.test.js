'use strict';
const HashTable = require('./hash-table');

const testHashTable = new HashTable(5);
describe('Create Hash Table', () => {
  it('should create table with specific size', () => {
    const newTable = new HashTable(55);
    expect(newTable.size).toEqual(55);
    expect(newTable.table).toBeInstanceOf(Array);
  });
  it('should create table with the default size (50) ', () => {
    const newTable = new HashTable();
    expect(newTable.size).toEqual(50);
    expect(newTable.table).toBeInstanceOf(Array);
  });
  it('should throw error if the size is not a number ', () => {
    expect(() => {
      new HashTable('aaa');
    }).toThrow();
  });
});

describe('Hash table (add)', () => {
  it('should add value to the hash table', () => {
    testHashTable.add('Amman', 'city');
    testHashTable.add('Aqaba', 'city');
    testHashTable.add('Jordan', 'country');
    testHashTable.add('Egypt', 'country');
    testHashTable.add('Iraq', 'country');
    testHashTable.add('ُEarth', 'planet');
    testHashTable.add('Mars', 'planet');
    testHashTable.add('USA', 'country');
    testHashTable.add('NY', 'city');
    testHashTable.add('Sun', 'star');
    expect(testHashTable.get('USA')).toEqual('country');
  });
  it('should throw Error if the value is null or undefined', () => {
    expect(() => {
      testHashTable.add('NY');
      testHashTable.add('NY', null);
    }).toThrow();
  });
});

describe('Hash table (get)', () => {
  it('should returns Value associated with that key in the table', () => {
    expect(testHashTable.get('USA')).toEqual('country');
    expect(testHashTable.get('Mars')).toEqual('planet');
    expect(testHashTable.get('Mousa')).toEqual(null);
  });
});

describe('Hash table (hash)', () => {
  it('should returns index for the key', () => {
    expect(typeof testHashTable.hash('USA')).toEqual('number');
    console.log(testHashTable.hash('USA'),testHashTable.hash('ASU'));
  });
  it('should throw error if the key is not a string', () => {
    expect(() => {
      testHashTable.hash(123);
    }).toThrow();
  });
});

describe('Hash table (contains)', () => {
  it('should returns true if the table contain the input key', () => {
    expect(testHashTable.contains('USA')).toEqual(true);
    expect(testHashTable.contains('Jordan')).toEqual(true);
    expect(testHashTable.contains('Mousa')).toEqual(false);
    expect(testHashTable.contains('ASU')).toEqual(false);
    expect(testHashTable.contains('Earth')).toEqual(false);
  });
});
