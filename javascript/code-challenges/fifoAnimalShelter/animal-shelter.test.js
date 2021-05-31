'use strict';
const { Animal } = require('./animal-shelter');
const { AnimalShelter } = require('./animal-shelter');

describe('Create new Shelter and new Animal', () => {
  it('should create new Empty shelter', () => {
    const emptyShelter = new AnimalShelter();
    expect(emptyShelter.length).toBe(0);
    expect(emptyShelter.top).toBe(null);
  });
  it('should create new Animal', () => {
    const newCat = new Animal('cat', 'sheriy');
    expect(newCat.type).toBe('cat');
    expect(newCat.next).toBe(null);
    expect(newCat.name).toBe('sheriy');
  });
});
let kata = new Animal('cat', 'kata');
let ahri = new Animal('cat', 'ahri');
let kity = new Animal('cat', 'kity');
let rengo = new Animal('dog', 'rengo');
let rock1 = new Animal('dog', 'rock1');
let rock2 = new Animal('dog', 'rock2');
let rock3 = new Animal('dog', 'rock3');

const shelter = new AnimalShelter();
describe('Enqueue multiple animal', () => {
  shelter.enqueue(rock1);
  shelter.enqueue(kata);
  shelter.enqueue(ahri);
  shelter.enqueue(rock2);
  shelter.enqueue(rengo);
  shelter.enqueue(kity);
  shelter.enqueue(rock3);
  it('successfully  enqueue multiple animal', () => {
    expect(shelter.length).toBe(7);
    expect(shelter.top).toBeDefined();
  });
  it('should the first animal on the top', () => {
    expect(shelter.top.name).toBe(rock1.name);
    expect(shelter.top.type).toBe(rock1.type);
  });
});

describe('dequeue from the  animal shelter', () => {
  it('return the first cat and return it', () => {
    let adopted = shelter.dequeue('cat');
    expect(adopted).toBeDefined();
    expect(adopted.name).toBe('kata');
    expect(adopted.type).toBe('cat');
    expect(shelter.length).toBe(6);
  });

  it('return the first cat and return it', () => {
    let adopted = shelter.dequeue('dog');
    expect(adopted).toBeDefined();
    expect(adopted.name).toBe('rock1');
    expect(adopted.type).toBe('dog');
    expect(shelter.length).toBe(5);
  });
});
