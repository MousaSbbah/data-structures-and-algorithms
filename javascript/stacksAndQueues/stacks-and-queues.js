"use strict";

/**
 * // Create a Node class
 */
class Node {
  /**aaaaa
   * @param  {any} value  // value for the new node
   * @param  {Node object} next // next node of the new node
   */
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(val) {
    if (val === null || val === undefined) {
      throw "Invalid Input";
    }
    const newNode = new Node(val, this.top);
    this.top = newNode;
    this.length++;
  }
  pop() {
    if (this.top === null) {
      throw "error : Empty stack";
    }
    let value = this.top.value;
    this.top = this.top.next;
    this.length--;
    return value;
  }
  peek() {
    if (this.top === null) {
      throw "error : Empty stack";
    }
    return this.top.value;
  }
  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val, null);
    if (this.front === null) {
      this.front = newNode;
      this.length++;
      return;
    }
    let current = this.front;
    while (current) {
      console.log(newNode);
      if (current.next === null) {
        current.next = newNode;
        this.length++;
        return;
      }
      current = current.next;
    }
  }
  dequeue() {
    if (this.top === null) {
      throw "error : Empty stack";
    }
    let value = this.front.value;
    this.front = this.front.next;
    this.length--;
    return value;
  }

  peek() {
    return this.front.value;
  }
  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
  }
}


const qq = new Queue();
qq.enqueue('a');
qq.enqueue('b');
qq.enqueue('c');
qq.enqueue('d');
qq.enqueue('e');

function asd(qq,input) {
  while (qq.length !== 1 ){
    for (let k = 0; k < input; k++) {
      if(k === 2 ){
        qq.dequeue();
      }else{
        qq.enqueue(qq.dequeue());
      }
    }
  }
}
asd(qq,3);
console.log(qq);

module.exports = {
  Stack: Stack,
  Queue: Queue,
};
