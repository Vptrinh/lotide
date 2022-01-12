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

const middle = function(array) {
  let result = [];
  let middleIndex = "";
  let secondMiddle = "";
  if (array.length <= 1) {
    return result = []; // return an empty array for arrays with one or two elements as there is no middle
  } else if (array.length % 2 === 0) {
    middleIndex = array.length / 2; 
    secondMiddle = array.length / 2 + 1;
    result.push(middleIndex);
    result.push(secondMiddle);
  } else {
    middleIndex = array.length / 2;
    result.push(Math.ceil(middleIndex));
  }
  console.log(result);
  return result;
};

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]