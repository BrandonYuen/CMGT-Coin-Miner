var expect = require('chai').expect;

const combineRows = require('../hashing/combineRows');

describe('combineRows()', function () {
  it('should combine first two child-arrays untill one row is left', function () {
    
    // 1. ARRANGE
    let inputArray = [
        [ 1, 1, 6, 1, 0, 1, 1, 2, 0, 1 ],
        [ 5, 4, 2, 5, 3, 5, 1, 5, 6, 4],
        [ 2, 3, 5, 7, 8, 9, 3, 6, 5, 6 ]
    ];
    var expectation = [8, 8, 3, 3, 1, 5, 5, 3, 1, 1];

    // 2. ACT
    var assumption = combineRows(inputArray);

    // 3. ASSERT
    expect(assumption).to.deep.equal(expectation);

  });
});