'use strict';

const {Queue} = require('../../stacksAndQueues/stacks-and-queues');

function breadthFirst() {
  if(!this.root) throw 'Error: Empty tree';
  //result array
  let data = [];
  //create new queue
  const queue = new Queue();
  //set the root in the node variable
  let node = this.root;
  //add this node in the queue
  queue.enqueue(node);
  while (queue.length) {
    //remove the first in from the queue and save the node in a variable
    node = queue.dequeue();
    //push the value of that node in the result array
    data.push(node.value);
    //push the left node to the queue
    if (node.left) queue.enqueue(node.left);
    // push the right node to the queue
    if (node.right) queue.enqueue(node.right);
  }
  //return the result
  return data;
}

//export to extend tree class
module.exports = breadthFirst;
