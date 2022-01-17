
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

const assert = require('chai').assert;
const eqObjects   = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for eqObjects({a: \"1\", b: \"2\"}, {b: \"2\", a: \"1\"})", () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });
});