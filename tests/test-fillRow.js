var expect = require('chai').expect;

const fillRow = require('../hashing/fillRow');

describe('fillRow()', function () {
  it('should return an array of 10 numbers, filled from 0 to 9 if need', function () {
    
    // 1. ARRANGE
    let input = [1, 5, 3, 4, 2, 6, 7];
    var expectation = [1, 5, 3, 4, 2, 6, 7, 0, 1, 2];

    // 2. ACT
    var assumption = fillRow(input);

    // 3. ASSERT
    expect(assumption).to.deep.equal(expectation);

  });
});