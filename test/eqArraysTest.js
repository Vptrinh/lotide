const eqArrays = require ('../eqArrays');
const assert = require('chai').assert;

// assertEqual((["1", "2", "3"], ["1", "2", 3]), false);// => false
// assertEqual(([1, 2, 3], [1, 2, 3]), true);

describe("#eqArrays", () => {
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.deepEqual(eqArrays([1, 2, 3],[1, 2, 3]), true);
  });
});