'use strict';

// creating Node class
function Node(data) {
  if (data === null || data === undefined)
    throw 'unexpected input value for the node';
  this.data = data;
  this.parent = null;
  this.children = [];
}

// creating k-ary-tree constructor
class KAryTree {
  constructor(node = null) {
    this.root = node;
  }
}

function fizzBuzzTree(tree) {
  //check if the input is a k tree ot not
  if (!(tree instanceof KAryTree)) throw 'the input must be a k-ary tree';
  // check if the tree empty or not
  if (!tree.root) throw 'Error : Empty array';
  //create new tree to save the result
  const newTree = new KAryTree(tree.root);

  //declare new function to check and change the node value
  function checkAndChange(currentNode) {
    // create a logic to check and compare the values
    if (currentNode) {
      if (!(currentNode.data % 3) && !(currentNode.data % 5)) {
        currentNode.data = 'fizzBuzz';
      } else if (!(currentNode.data % 3)) {
        currentNode.data = 'fizz';
      } else if (!(currentNode.data % 5)) {
        currentNode.data = 'buzz';
      } else {
        currentNode.data = currentNode.data.toString();
      }
      //itreate in the children of the node
      for (var i = 0; i < currentNode.children.length; i++) {
        // check and change the values for child
        checkAndChange(currentNode.children[i]);
      }
    }
  }
  // start check from the root;
  checkAndChange(newTree.root);
  //return the new tree
  return newTree;
}

module.exports = { Node, KAryTree, fizzBuzzTree };
