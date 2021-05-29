'use strict';

// Require our linked list implementation
const { Stack } = require('./stacks-and-queues');
const { Queue } = require('./stacks-and-queues');

describe('STACK Testing', () => {
  let ss = new Stack();
  it('should be empty stack', () => {
    expect(ss.top).toBe(null);
  });
  it('push Nodes to the stack', () => {
    ss.push(40);
    ss.push(30);
    ss.push(20);
    ss.push(10);
    expect(ss.top.value).toBe(10);
    expect(ss.top.next.value).toBe(20);
    expect(ss.length).toBe(4);
    expect(ss.isEmpty()).toBe(false);
  });
  let ss1 = new Stack();
  it('returns a boolean result depending on  that empty stack or not  ', () => {
    expect(ss1.top).toBe(null);
    expect(ss1.length).toBe(0);
    expect(ss1.isEmpty()).toBe(true);
  });

  it('peek --> should return the top value on stack ', () => {
    expect(ss.peek()).toBe(10);
  });

  it('pop should remove the top node and return the value of it  ', () => {
    expect(ss.pop()).toBe(10);
    expect(ss.length).toBe(3);
    expect(ss.top.value).toBe(20);
  });
  it('edge cases test ', () => {
    expect(() => {
      ss1.peek();
    }).toThrow();
  });
  expect(() => {
    ss1.pop();
  }).toThrow();
});


describe('Queue Testing', () => {
  let qq = new Queue();
  it('should be empty Queue', () => {
    expect(qq.front).toBe(null);
  });
  it('enqueue Nodes to the Queue', () => {
    qq.enqueue(40);
    qq.enqueue(30);
    qq.enqueue(20);
    qq.enqueue(10);
    expect(qq.front.value).toBe(40);
    expect(qq.front.next.value).toBe(30);
    expect(qq.length).toBe(4);
    expect(qq.isEmpty()).toBe(false);
  });
  let qq1 = new Queue();
  it('isEmpty returns a boolean result depending on  that empty Queue or not  ', () => {
    expect(qq1.front).toBe(null);
    expect(qq1.length).toBe(0);
    expect(qq1.isEmpty()).toBe(true);
  });

  it('peek --> should return the top value on stack ', () => {
    expect(qq.peek()).toBe(40);
  });

  it('pop should remove the back node and return the value of it  ', () => {
    expect(qq.dequeue()).toBe(40);
    expect(qq.length).toBe(3);
    expect(qq.front.value).toBe(30);
  });
  it('edge cases test ', () => {
    expect(() => {
      qq1.peek();
    }).toThrow();
  });
  expect(() => {
    qq1.dequeue();
  }).toThrow();
});

