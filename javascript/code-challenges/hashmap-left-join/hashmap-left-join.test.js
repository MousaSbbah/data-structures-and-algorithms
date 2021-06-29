const HashTable = require('../../hastable/hash-table');
const joinLeft = require('./hashmap-left-join');

describe('Join Left Test', () => {
  it('throw an error if the input not hash table', () => {
    expect(() => {
      joinLeft(15, '17');
    }).toThrow();
  });
  it('should return 2D array of expected result', () => {
    const t1 = new HashTable();
    const t2 = new HashTable();

    t1.add('1', 'a');
    t1.add('2', 'b');
    t1.add('3', 'c');
    t1.add('5', 'd');
    t1.add('6', 'e');
    t1.add('7', 'e');

    t2.add('1', 'z');
    t2.add('3', 'y');
    t2.add('7', 'x');
    t2.add('5', 'f');
    t2.add('6', 'q');
    const result = joinLeft(t1, t2);
    expect(result.length).toEqual(6);
    console.log(result);
    expect(result[1]).toEqual(['1','a','z']);
    expect(result[0]).toEqual(['2', 'b', null]);
  });
  it(' if the second table is empty should return 2D array of expected result', () => {
    const t1 = new HashTable();
    const t2 = new HashTable();

    t1.add('1', 'a');
    t1.add('2', 'b');
    t1.add('3', 'c');
    t1.add('5', 'd');
    t1.add('6', 'e');
    t1.add('7', 'e');

    t2.add('1', 'z');
    t2.add('3', 'y');
    t2.add('7', 'x');
    t2.add('5', 'f');
    t2.add('6', 'q');
    const result = joinLeft(t1, new HashTable());
    expect(result.length).toEqual(6);
    expect(result[1]).toEqual(['1','a',null]);
    expect(result[0]).toEqual(['2', 'b', null]);
  });
  it(' if the first table is empty should return an empty array', () => {
    const t1 = new HashTable();
    const t2 = new HashTable();

    t1.add('1', 'a');
    t1.add('2', 'b');
    t1.add('3', 'c');
    t1.add('5', 'd');
    t1.add('6', 'e');
    t1.add('7', 'e');

    t2.add('1', 'z');
    t2.add('3', 'y');
    t2.add('7', 'x');
    t2.add('5', 'f');
    t2.add('6', 'q');
    const result = joinLeft(new HashTable(),t1 );
    expect(result.length).toEqual(0);
    expect(result).toEqual([]);
  });
});
// const t1 = new HashTable();
// const t2 = new HashTable();

// t1.add("1", "a");
// t1.add("2", "b");
// t1.add("3", "c");
// t1.add("5", "d");
// t1.add("6", "e");
// t1.add("7", "e");

// t2.add("1", "z");
// t2.add("3", "y");
// t2.add("7", "x");
// t2.add("7", "x");
// t2.add("5", "f");
// t2.add("6", "q");

// console.log(leftJoin(t2, new HashTable()));
