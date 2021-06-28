'use strict';

const treeIntersection = require('./hashmap-tree-intersection.js');
const { BinarySearchTree } = require('../../tree/tree.js');

describe('treeIntersection ---> Happy Path', () => {
  const tree1 = new BinarySearchTree();
  const tree2 = new BinarySearchTree();

  tree1.add(15);
  tree1.add(20);
  tree1.add(4);
  tree1.add(60);
  tree1.add(8);
  tree1.add(7);

  tree2.add(15);
  tree2.add(33);
  tree2.add(4);
  tree2.add(60);
  tree2.add(14);
  tree2.add(7);

  it('should return array of all values found to be in 2 binary trees', () => {
    expect(treeIntersection(tree1, tree2)).toEqual(['15', '4', '7', '60']);
  });
  it('should return array of all values found to be in 2 binary trees', () => {
    expect(treeIntersection(tree2, tree1)).toEqual(['15', '4', '7', '60']);
  });
  const tree3 = new BinarySearchTree();
  tree3.add(98);
  tree3.add(100);
  tree3.add(5);
  it('should return array of all values found to be in 2 binary trees', () => {
    expect(treeIntersection(tree3, tree1)).toEqual([]);
  });
});
describe('treeIntersection ---> Edge Cases', () => {
  const tree1 = new BinarySearchTree();
  const tree2 = new BinarySearchTree();

  tree1.add(15);
  tree1.add(20);
  tree1.add(4);
  tree1.add(60);
  tree1.add(8);
  tree1.add(7);

  tree2.add(15);
  tree2.add(33);
  tree2.add(4);
  tree2.add(60);
  tree2.add(14);
  tree2.add(7);

  it('should throw an Error if one of inputs not tree', () => {
    expect(()=>{treeIntersection(15,[4,8,9]);}).toThrow(); 
  });
  const tree4 = new BinarySearchTree();
  it('should return empty array if one of trees is empty ', () => {
    expect(treeIntersection(tree2, tree4)).toEqual([]);
  });
});
