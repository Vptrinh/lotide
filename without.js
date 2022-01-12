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
  console.log("length:", length);
  for (let i = 0; i < length; i++) {
    console.log(!array1.includes(array2[i]));
    if (!array2.includes(array1[i]) && array1[i] !== undefined) {
      result.push(array1[i]);
    }
  }
  return result;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [5, 2, 1, 2, "3"])); // => ["1", "2"]);

const words = ["lighthouse"];
console.log(without(words, ["hello", "world", "lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);