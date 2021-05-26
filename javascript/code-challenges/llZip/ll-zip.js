'use strict';

const LinkedList = require('../../linked-list/linked-list.js');

function zipLists(ll1, ll2) {
  if (!(ll1 instanceof LinkedList && ll2 instanceof LinkedList)) {
    return 'The input should be Linked list ';
  }
  let current1 = ll1.head;
  let current2 = ll2.head;
  const result = new LinkedList();
  while (current1 || current2) {
    if (current1) {
      result.append(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      result.append(current2.value);
      current2 = current2.next;
    }
  }
  return result;
}

module.exports = zipLists;
