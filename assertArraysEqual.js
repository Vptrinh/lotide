//eqArrays function - checks if the two arrays are equal to each other

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      result.push(array1[i]);
    }
  }
  if (result.length === array1.length) return true;

  return false;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected) === true) {
    console.log(`${actual} === ${expected}`);
  } else {
    console.log(`${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 5, 3], [1, 2, 3]);