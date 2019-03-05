var expect = require('chai').expect;

const encodedArray = require('../hashing/encodedArray');
const encodedArrayRecursion = require('../hashing/encodedArrayRecursion');

describe('encodedArray()', function () {
  it('should return an array of numbers encoded with ASCII', function () {
    
    // 1. ARRANGE
    let input = "text"
    var expectation = [1, 1, 6, 1, 0, 1, 1, 2, 0, 1, 1, 6];

    // 2. ACT
    var assumption = encodedArray(input);

    // 3. ASSERT
    expect(assumption).to.deep.equal(expectation);

  });
});

describe('encodedArrayRecursion()', function () {
  it('should return an array of numbers encoded with ASCII', function () {
    
    // 1. ARRANGE
    let input = "text"
    var expectation = [1, 1, 6, 1, 0, 1, 1, 2, 0, 1, 1, 6];

    // 2. ACT
    var assumption = encodedArrayRecursion(input, []);

    // 3. ASSERT
    expect(assumption).to.deep.equal(expectation);

  });
});