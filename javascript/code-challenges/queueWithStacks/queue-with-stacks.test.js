const PseudoQueue = require('./queue-with-stacks');

describe('Queue Testing', () => {
  let pq = new PseudoQueue();
  it('should be empty Stack', () => {
    expect(pq.main.top).toBe(null);
  });
  it('enqueue Nodes to the Stack', () => {
    pq.enqueue(40);
    pq.enqueue(30);
    pq.enqueue(20);
    pq.enqueue(10);
    expect(pq.main.top.value).toBe(10);
    expect(pq.main.top.next.value).toBe(20);
    expect(pq.main.length).toBe(4);
    expect(pq.main.isEmpty()).toBe(false);
  });
  let pq1 = new PseudoQueue();
  it('create an empty PseudoQueue  ', () => {
    expect(pq1.main.top).toBe(null);
    expect(pq1.main.length).toBe(0);
  });

  it('dequeue should remove the last node and return the value of it  ', () => {
    expect(pq.dequeue()).toBe(40);
    expect(pq.main.length).toBe(3);
    expect(pq.main.top.value).toBe(10);
  });
  it('edge cases test ', () => {
    expect(() => {
      pq1.dequeue();
    }).toThrow();
  });
});
