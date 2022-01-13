const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      result.push(array1[i]);
    }
  }
  return result.length === array1.length;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let someKeys in object1) {
      if (object1[someKeys] !== object2[someKeys]) {
        if (!eqArrays(object1[someKeys], object2[someKeys])) return false;
        }
      }
    }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TEST CODES
const ab = {
  a: 1,
  b: 2,
};

const ba = {
  b:2,
  a:1,
};

const acb = {
  a:1,
  c:3,
  b:2,
};

assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,acb);
