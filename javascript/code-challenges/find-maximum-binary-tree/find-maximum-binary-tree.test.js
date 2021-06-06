"use strict";

const { Node } = require("../../tree/tree.js");
const { BinaryTree } = require("../../tree/tree.js");
let tree = null;

describe("Binary Tree", () => {
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
  it("'Happy Path 'should return the maximum value in the tree", () => {
    expect(tree.findMaximumValue()).toEqual(88);
  });
  it("should return the root value if tree has one node", () => {
    const newNode = new Node(55);
    const newTree = new BinaryTree(newNode);
    expect(newTree.findMaximumValue()).toEqual(55);
  });

  it("should throw an error if the tree is empty", () => {
    const emptyTree = new BinaryTree();
    expect(() => {
      emptyTree.findMaximumValue();
    }).toThrow();
  });
});
