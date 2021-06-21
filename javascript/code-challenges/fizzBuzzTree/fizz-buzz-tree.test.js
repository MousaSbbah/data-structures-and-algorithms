'use strict';

const { Node } = require('./fizz-buzz-tree');
const { KAryTree } = require('./fizz-buzz-tree');
const { fizzBuzzTree } = require('./fizz-buzz-tree');

describe('Node class testing', () => {
  it('should create new Node', () => {
    const newNode = new Node(5);
    expect(newNode.parent).toEqual(null);
    expect(newNode.children).toEqual([]);
    expect(newNode.data).toEqual(5);
  });
  it('throw error if the data null or undefined', () => {
    expect(() => {
      new Node();
    }).toThrow();
  });
});
let tree;
describe('KAryTree class testing', () => {
  it('should create an empty tree', () => {
    const emptyTree = new KAryTree();
    expect(emptyTree.root).toEqual(null);
  });
  tree = new KAryTree(new Node(1)); //       1

  tree.root.children.push(new Node(2)); //   2   3     15
  tree.root.children[0].parent = tree.root;
  //                                       6 10
  tree.root.children.push(new Node(3));
  tree.root.children[1].parent = tree.root;

  tree.root.children.push(new Node(15));
  tree.root.children[2].parent = tree.root;

  tree.root.children[0].children.push(new Node(6));
  tree.root.children[0].children[0].parent = tree.root.children[0];

  tree.root.children[0].children.push(new Node(10));
  tree.root.children[0].children[1].parent = tree.root.children[0];
  it('should create a tree with nodes', () => {
    expect(tree.root.data).toEqual(1);
    expect(tree.root.children.length).toEqual(3);
    expect(tree.root.children[1].parent).toEqual(tree.root);
  });
});
describe('fizzBuzz testing', () => {
  it('should throw an error if the input is not tree', () => {
    expect(() => {
        fizzBuzzTree(255);
    }).toThrow();
  });

  it('should throw an error if the input is an empty tree', () => {
    expect(() => {
        fizzBuzzTree(new KAryTree());
    }).toThrow();
  });
  it('Happy Path it should return new tree with fizzBuzz values', () => {
    const fizzBuzzResult = fizzBuzzTree(tree);
    expect(fizzBuzzResult instanceof KAryTree).toEqual(true);
    expect(fizzBuzzResult.root.children.length).toEqual(3);
    expect(fizzBuzzResult.root.children[2].data).toEqual('fizzBuzz');
    expect(fizzBuzzResult.root.data).toEqual('1');
    expect(fizzBuzzResult === tree).toEqual(false);
  });
});
