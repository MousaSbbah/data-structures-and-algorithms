'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list.js');

describe('Linked List', () => {
  let ll = new LinkedList();
  it('should be empty linked list', () => {
    expect(ll.head).toBe(null);
  });
  it('Insert Nodes to the linked list', () => {
    ll.insert(40);
    ll.insert(30);
    ll.insert(20);
    ll.insert(10);
    expect(ll.head.value).toBe(10);
    expect(ll.head.next.value).toBe(20);
  });
  it('returns a boolean result depending on  that value exists as a Node’s value in the linked list ', () => {
    expect(ll.includes(30)).toBe(true);
    expect(ll.includes(100)).toBe(false);
  });

  it('Should return  a string representing all the values in the Linked List,', () => {
    expect(ll.toString()).toBe('{10}-->{20}-->{30}-->{40}-->NULL');
  });

  it('Should append  new Node ', () => {
    expect(ll.toString()).toBe('{10}-->{20}-->{30}-->{40}-->NULL');
  });
});
