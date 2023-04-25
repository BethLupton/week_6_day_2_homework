const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurassic Park', 24.50);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 100);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 50);
    dinosaur3 = new Dinosaur('barosaurus', 'omnivore', 30);

  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 24.50);

  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collectionOfDinosaurs;
    assert.strictEqual(actual.length, 0);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur2);
    const expected = [dinosaur1, dinosaur3];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const expected = dinosaur1;
    assert.deepStrictEqual(park.mostVisitedDinosaur(), expected)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
