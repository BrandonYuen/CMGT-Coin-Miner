var expect = require('chai').expect;

const hash = require('../hashing/hash');

describe('hash()', function () {
  it('should return a hashed string using the mod10 algorithm', function () {
    
    // 1. ARRANGE
    let toBeHashed = "000078454c038871fa4d67b0022a30baaf25eaa231f8991b108e2624f052f3f8CMGT Mining CorporationBob PIKAB11548689513858154874778871610312"
    var expectation = "00005d430ce77ad654b5309a770350bfb4cf49171c682330a2eccc98fd8853cf";

    // 2. ACT
    var assumption = hash(toBeHashed);

    // 3. ASSERT
    expect(assumption).to.deep.equal(expectation);

  });
});