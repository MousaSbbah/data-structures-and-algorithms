'use strict';

const { Node } = require('./tree.js');
const { BinaryTree } = require('./tree.js');
const { BinarySearchTree } = require('./tree.js');
let tree = null;

describe('Binary Tree', () => {
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;
    tree = new BinaryTree(one);
  });
  it('should traverse tree using pre-order', () => {
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    expect(tree.preOrder()).toEqual(expected);
  });

  it('should traverse tree using in-order', () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    expect(tree.inOrder()).toEqual(expected);
  });
  it('should traverse tree using post-order', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    expect(tree.postOrder()).toEqual(expected);
  });
});
describe('Binary Search Tree', () => {
  let newBTS;
  beforeAll(() => {
    newBTS = new BinarySearchTree();
    newBTS.add(10);
    newBTS.add(15);
    newBTS.add(16);
    newBTS.add(17);
    newBTS.add(25);
    newBTS.add(17);
    newBTS.add(8);
    newBTS.add(4);
  });

  it('should return true if the input value exist in the tree', () => {
    expect(newBTS.contains(8)).toEqual(true);
  });
  it('should return false if the input value doesn\'t exist in the tree', () => {
    expect(newBTS.contains(88)).toEqual(false);
  });
  it('should add new node to the tree ', () => {
    newBTS.add(88);
    expect(newBTS.contains(88)).toEqual(true);
  });
});
describe('Edge Cases', () => {
  const newBST = new BinarySearchTree();
  it('should thorw error if the input falsy for the add', () => {
    expect(() => {
      newBST.add();
    }).toThrow();
  });
  it('should thorw error if the input falsy for the contains', () => {
    expect(() => {
      newBST.contains(null);
    }).toThrow();
  });
});
