//Assert Equal function
const assertEqual = require ('./assertEqual');

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {return false};
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      result.push(array1[i]);
    }
  }
  return result.length === array1.length;
};

module.exports = eqArrays;

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));// => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);// => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);