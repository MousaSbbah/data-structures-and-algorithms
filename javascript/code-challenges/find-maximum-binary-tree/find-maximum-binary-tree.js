function findMaximumValue() {
  //check if the tree not empty
  if(!this.root) throw 'Error:can not find maximum of Empty Tree';
  //declare new variable to save the maximum
  let max = this.root.value;
  //start search from the root
  maximum(this.root, max);
  /**find the maximum value of a tree
   * @param  {node} node
   * @param  {Number} value
   */
  function maximum(node, value) {
    //compare the value with the root value
    if (node.value > value) max = node.value;
    //Invoke the function again in the left subtree
    if (node.left) maximum(node.left, max);
    //Invoke the function again in the right subtree
    if (node.right) maximum(node.right, max);
  }
  //After that return the max value
  return max;
}

module.exports = findMaximumValue;
