'use strict';

const LinkedList = require('../../linked-list/linked-list.js');

function zipLists(ll1, ll2) {
  if (!(ll1 instanceof LinkedList && ll2 instanceof LinkedList)) {
    return 'The input should be Linked list ';
  }
  let current1 = ll1.head;
  let current2 = ll2.head;
  while (current2 || current1) {
    if(!current1.next){
      console.log(current2);
      current1.next=current2;
      break;
    }
    if(!current2.next){
      console.log(current1);
      break;
    }
    let nextNode1 = current1.next;
    let nextNode2 = current2.next;
    current1.next=current2;
    current1.next.next = nextNode1;
    current1=nextNode1;
    current2 = nextNode2;

  }
  return ll1;
}


let llInput1 = new LinkedList();
let llInput2 = new LinkedList();
llInput1.insert('e');
llInput1.insert('d');
llInput1.insert('c');
llInput1.insert('b');
llInput1.insert('a');
// llInput2.insert(5);
// llInput2.insert(4);
llInput2.insert(3);
llInput2.insert(2);
llInput2.insert(1);

console.log(zipLists(llInput1, llInput2).toString());

module.exports = zipLists;
