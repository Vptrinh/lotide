//const eqArrays = require ('../eqArrays');

const eqObjects = require ('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
// //TEST CODES
// const ab = {
//   a: 1,
//   b: 2,
// };

// const ba = {
//   b:2,
//   a:1,
// };

// const acb = {
//   a:1,
//   c:3,
//   b:2,
// };

// assertObjectsEqual(ab,ba);
// assertObjectsEqual(ab,acb);
