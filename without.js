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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected) === true) {
    console.log(`${actual} === ${expected}`);
  } else {
    console.log(`${actual} !== ${expected}`);
  }
};

const without = function(array1, array2) {
  let result = [];
  const length = array1.length > array2.length ? array1.length : array2.length;
  for (let i = 0; i < length; i++) {
    if (!array2.includes(array1[i]) && array1[i] !== undefined) {
      result.push(array1[i]);
    }
  }
  return result;
};

console.log(without([1, 2, 3, 5, "6"], [1, 2, 4, 6, "3"]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));