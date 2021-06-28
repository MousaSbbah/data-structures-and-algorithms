'use strict';

const HashTable = require('../../hastable/hash-table.js');
const { BinarySearchTree } = require('../../tree/tree.js');

function treeIntersection(tree1, tree2) {
  if(!(tree1 instanceof BinarySearchTree) || !(tree1 instanceof BinarySearchTree )) throw 'The input in not a tree';
  if(tree2.root === null || tree1.root === null) return [];
  const table = new HashTable();
  saveValues(tree1.root,table);
  return compare(tree2.root,[],table);

}

function saveValues(node,table) {
  table.add(node.value.toString(), 1);
  if (node.left) saveValues(node.left,table);
  if (node.right) saveValues(node.right,table);
}

function compare(node,arr,table) {
  const result =  arr;
  if (table.contains(node.value.toString())) result.push(node.value.toString());
  if (node.left) compare(node.left, result,table);
  if (node.right) compare(node.right,result,table);
  return result;
}

module.exports=treeIntersection;

