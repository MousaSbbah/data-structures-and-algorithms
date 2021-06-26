'use strict';

const LinkedList = require('../linked-list/linked-list');
class HashTable {
  constructor(size=50) {
    if(typeof(size)!=='number') throw 'The Size should be number';
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    if(typeof(key) !== 'string' ) throw 'Invalid key';
    let hash = 0;
    hash =
      (key.split('').reduce((result, n) => result + n.charCodeAt(0), 0) * 599) %
      this.size;

    return hash;
  }

  add(key, value) {
    if(value === null || value === undefined ) throw 'the value is undefined or null';
    let hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    this.table[hash].insert({[key]:value
    });
  }

  get(key) {
    let hash = this.hash(key);
    let targtedList = this.table[hash];
    if(!targtedList) return null;
    let current = targtedList.head;
    while(current){
      if(current.value[key]) return current.value[key];
      current=current.next;
    }
    return null;
  }

  contains(key) {
    let hash = this.hash(key);
    let targtedList = this.table[hash];
    if(!targtedList) return false;
    let current = targtedList.head;
    while(current){
      if(current.value[key]) return true;
      current=current.next;
    }
    return false;
  }
}

module.exports=HashTable;
