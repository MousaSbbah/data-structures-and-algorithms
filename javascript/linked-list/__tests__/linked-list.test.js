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
describe('Linked List insertion', () => {
  let ll1 = new LinkedList();
  ll1.insert(6);
  ll1.insert(5);

  it('Can successfully add a node to the end of the linked list', () => {
    ll1.append(7);
    expect(ll1.toString()).toBe('{5}-->{6}-->{7}-->NULL');
  });
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    ll1.append(8);
    ll1.append(9);
    expect(ll1.toString()).toBe('{5}-->{6}-->{7}-->{8}-->{9}-->NULL');
  });

  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    ll1.insertBefore(7,69);
    expect(ll1.toString()).toBe('{5}-->{6}-->{69}-->{7}-->{8}-->{9}-->NULL');
  });

  it('Can successfully insert a node before the first node of a linked list ', () => {
    ll1.insertBefore(5,49);
    expect(ll1.toString()).toBe('{49}-->{5}-->{6}-->{69}-->{7}-->{8}-->{9}-->NULL');
  });
  it('Can successfully insert after a node in the middle of the linked list ', () => {
    ll1.insertAfter(69,70);
    expect(ll1.toString()).toBe('{49}-->{5}-->{6}-->{69}-->{70}-->{7}-->{8}-->{9}-->NULL');
  });
  it('Can successfully insert a node after the last node of the linked list', () => {
    ll1.insertAfter(9,10);
    expect(ll1.toString()).toBe('{49}-->{5}-->{6}-->{69}-->{70}-->{7}-->{8}-->{9}-->{10}-->NULL');
  });
});
