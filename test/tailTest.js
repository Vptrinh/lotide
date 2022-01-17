// const assertEqual = require ('../assertEqual');

// // //TEST CODE
// const result = (["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"]; // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("return [2, 3] in [1,2,3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2 ,3]);
  });
});