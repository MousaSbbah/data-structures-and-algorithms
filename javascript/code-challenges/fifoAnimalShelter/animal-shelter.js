'use strict';

class AnimalShelter {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  /**
   * @param  {Object} animal
   */
  enqueue(animal) {
    if (
      !(
        animal instanceof Animal &&
        (animal.type === 'dog' || animal.type === 'cat')
      )
    ) {
      return 'Invalid Input';
    }
    if (this.top === null) {
      this.top = animal;
      console.log('done');
      this.length++;
      return;
    }
    let current = this.top;
    while (current !== null) {
      if (current.next === null) {
        current.next = animal;
        console.log('done');
        this.length++;
        return;
      }
      current = current.next;
    }
  }
  /**
   * @param  {String} pref
   */
  dequeue(pref) {
    if (!pref || (pref !== 'dog' && pref !== 'cat')) {
      console.log('Invalid Animal type') ;
      return null;
    }
    if (this.top === null) {
      console.log(`The shelter has no Animals left`);
      return null;
    } else if (this.top.type === pref) {
      let value = this.top;
      this.top = this.top.next;
      console.log(`Thank you for adapting this ${pref} called ${value.name}`);
      this.length--;
      return value;
    }
    let current = this.top;
    while (current.next) {
      if (current.next.type === pref) {
        let value = current.next;
        current.next = current.next.next ? current.next.next : null;
        console.log(`Thank you for adapting this ${pref} called ${value.name}`);
        this.length--;
        return value;
      }
      current = current.next;
    }
    console.log(`The shelter has no ${pref}s left`);
    return null;
  }
}

class Animal {
  /**
   * @param  {String} type
   * @param  {String} name
   */
  constructor(type, name) {
    this.type = type;
    this.name = name;
    this.next = null;
  }
}

module.exports={Animal,AnimalShelter};





