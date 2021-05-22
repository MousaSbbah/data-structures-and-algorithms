'use strict';

class LinkedList {
  //Create a Linked List Class
  constructor() {
    this.head = null;
    this.length = 0;
  }
  /**
   * @param  {any} value //New Node Value
   */
  insert(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }
  /**
   * @param  {any} value // Node value
   */
  includes(value) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString() {
    // return a string representing all the values in the Linked List
    let current = this.head;
    let message = '';
    while (current) {
      message = `${message}{${current.value}}-->`;
      current = current.next;
    }
    return message + 'NULL';
  }
}

class Node {
  // Create a Node class
  /**
   * @param  {any} value  // value for the new node
   * @param  {Node object} next // next node of the new node
   */
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
