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