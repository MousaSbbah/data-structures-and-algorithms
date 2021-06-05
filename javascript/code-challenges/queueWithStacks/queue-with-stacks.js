'user strict';

const { Stack } = require('../../stacksAndQueues/stacks-and-queues');

/**    PseudoQueue  Class
 */
class PseudoQueue {

  constructor() {
    this.main = new Stack();
    this.temp = new Stack();
  }
  /** add node at the top of the main stack
   * @param  {} any value
   */
  enqueue(val) {
    this.main.push(val);
  }
  /**Remove the last node of the main satck

    */
  dequeue() {
    //check if the stack is not empty
    if (this.main.top === null) {
      throw 'ERROR : Its an empty stack';
    }
    //Loop till the last node
    while (this.main.top.next) {
      let val = this.main.pop();
      this.temp.push(val);
    }
    //save the last value
    let result = this.main.top.value;
    //pop the last node
    this.main.pop();
    while (this.temp.top) {
      //return back the main nodes without last one
      this.main.push(this.temp.top.value);
      this.temp.top = this.temp.top.next;
    }
    //return the saved value
    return result;
  }
}




module.exports = PseudoQueue;
