//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${actual} === ${expected}`);
  } else {
    console.log(`${actual} !== ${expected}`);
  }
};


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

// eqObjects will take in two objects and returns true or false, based on a perfect match.
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false