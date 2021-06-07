'use strict';
const { Node } = require('../../tree/tree.js');
const { BinaryTree } = require('../../tree/tree.js');
let tree = null;

describe('Binary Tree', () => {
  beforeAll(() => {
    let one = new Node(25);
    let two = new Node(-6);
    let three = new Node(44);
    let four = new Node(88);
    let five = new Node(3);
    let six = new Node(45);
    let seven = new Node(-100);
    let eight = new Node(50);
    let nine = new Node(2);

    one.left = two; //              25
    one.right = three; //      -6         44
    two.left = six; //      45           88   3
    six.right = seven; //     -100
    seven.left = eight; //    50  2
    seven.right = nine; //
    three.left = four;
    three.right = five;
    tree = new BinaryTree(one);
  });
  it('\'Happy Path \'should return a list of the values in the tree ', () => {
    expect(tree.breadthFirst()).toEqual([25, -6, 44, 45, 88, 3, -100, 50, 2]);
  });
  it('should return the root value inside array if the tree has one node', () => {
    const newNode = new Node(55);
    const newTree = new BinaryTree(newNode);
    expect(newTree.breadthFirst()).toEqual([55]);
  });

  it('should throw an error if the tree is empty', () => {
    const emptyTree = new BinaryTree();
    expect(() => {
      emptyTree.breadthFirst();
    }).toThrow();
  });
});
