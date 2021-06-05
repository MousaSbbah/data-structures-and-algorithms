'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    let result = [];
    if (this.root === null) return result;
    let traverse = (node) => {
      // read the root
      result.push(node.value);
      // read left
      if (node.left) traverse(node.left);
      // read right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // left - root - right
  inOrder() {
    let result = [];
    if (this.root === null) return result;

    let traverse = (node) => {
      // read left
      if (node.left) traverse(node.left);
      // read the root
      result.push(node.value);
      // read right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // left - right - root
  postOrder() {
    let result = [];
    if (this.root === null) return result;

    let traverse = (node) => {
      // read left
      if (node.left) traverse(node.left);
      // read right
      if (node.right) traverse(node.right);
      // read the root
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    if (!value) throw 'Invalid input value';
    // Creating a node
    const newNode = new Node(value);
    const insertNewNode = function (node, newNode) {
      // if the value is less than the node value move left of the tree
      if (newNode.value < node.value) {
        // if left is null insert node here
        if (node.left === null) node.left = newNode;
        // if left is not null recur until null is found
        else insertNewNode(node.left, newNode);
      }
      // if the value is more than the node value move right of the tree
      else {
        // if right is null insert node here
        if (node.right === null) node.right = newNode;
        // if right is not null recur until null is found
        else insertNewNode(node.right, newNode);
      }
    };
    // if its an empty tree add the noode on the top
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    // find the correct postion and add the values
    else {
      insertNewNode(this.root, newNode);
    }
  }

  /** Method to search and add the new node
   * @param  {Node} node current Node
   * @param  {Node} newNode The new Node to add
   */

  contains(value) {
    if (!value) throw 'Invalid value';
    let current = this.root;
    return search(current, value);
    function search(node, value) {
      // if trees is empty return null
      if (node === null) return false;
      // if value is less than node's value
      // move left
      else if (value < node.value) return search(node.left, value);
      // if value is less than node's value
      // move left
      else if (value > node.value) return search(node.right, value);
      // if value is equal to the node value
      // return node
      else return true;
    }
  }
}


module.exports = { BinaryTree, Node, BinarySearchTree };
