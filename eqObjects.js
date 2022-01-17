
//const assertEqual = require ('../assertEqual');
const eqArrays = require ('./eqArrays');

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

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false