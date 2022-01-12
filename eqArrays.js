//Assert Equal function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${actual} === ${expected}`);
  } else {
    console.log(`${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  let answer = "";
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      answer = true;
    } else {
      answer = false;
    }
  }
  return answer;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));// => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
