'use strict';
const zipList = require('./ll-zip');
const LinkedList = require('../../linked-list/linked-list');

describe('ZipList method', () => {
  let llInput1 = new LinkedList();
  let llInput2 = new LinkedList();
  llInput1.insert('e');
  llInput1.insert('d');
  llInput1.insert('c');
  llInput1.insert('b');
  llInput1.insert('a');
  llInput2.insert(5);
  llInput2.insert(4);
  llInput2.insert(3);
  llInput2.insert(2);
  llInput2.insert(1);

  it('Return ZipList  ', () => {
    let llResult = zipList(llInput1, llInput2);
    expect(llResult.head.value).toBe('a');
    expect(llResult.toString()).toBe(
      '{a}-->{1}-->{b}-->{2}-->{c}-->{3}-->{d}-->{4}-->{e}-->{5}-->NULL'
    );
  });
  it('Return error string for invalid input   ', () => {
    let llResult = zipList('llInput1', llInput2);
    expect(llResult.toString()).toBe(
      'The input should be Linked list '
    );
  });
});
