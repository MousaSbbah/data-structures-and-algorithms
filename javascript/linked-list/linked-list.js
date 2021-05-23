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
    //Check for any Invalid inputs and console error
    if (value === null || value === undefined) {
      console.log('Invalid input');
      return;
    }
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }
  /**
   * @param  {any} value // Node value
   */
  includes(value) {
    //Check for any Invalid inputs and console error
    if (value === null || value === undefined) {
      console.error('Invalid input');
      return;
    }
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
  append(value) {
    let newNode = new Node(value,null);
    if(this.head === null){
      this.head=newNode;
    }else{
      let tail = this.head;
      while(tail.next !== null){
        tail = tail.next;

      }
      tail.next = newNode;
    }
  }
  insertBefore(value, newVal){
    let newNode = new Node(newVal);

    if(!this.head){
      throw new Error('Error Empty Linked List ');
    } else {

      let current = this.head.next;
      let target = this.head;
      if(!current) {
        if(target.value === value){
          newNode.next = target;
          this.head = newNode;
          return;
        }
        else {
          throw new Error('ERROR :The linked list has one item');
        }
      }


      if(target.value === value){
        this.head = newNode;
        newNode.next = target;

        return;
      }
      while(current){
        if(current.value === value){
          target.next=newNode;
          newNode.next = current;
          return;
        }
        target = current;
        current = current.next;
      }

    }
    throw new Error('ERROR :Invalid Input');
  }

  insertAfter(value, newVal) {

    let newNode = new Node(newVal);

    if(!this.head){
      throw new Error('ERROR :Empty Linked List');
    } else {

      let current = this.head;
      while(current){
        if(current.value === value){
          newNode.next = current.next;
          current.next=newNode;

          return;
        }
        current = current.next;
      }
    }
    throw new Error('ERROR :Invalid input');

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
//2 - 3 -4 - 5
const ll = new LinkedList();
ll.insert(6);
ll.insert(5);
ll.insert(4);
ll.insert(3);
ll.insert(2);
ll.insert(1);

console.log(ll.toString());
ll.insertAfter(4,0);
console.log(ll.toString());

module.exports = LinkedList;
