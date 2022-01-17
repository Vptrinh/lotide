const middle = function(array) {
  let result = [];
  let middleIndex = "";
  let secondMiddle = "";
  if (array.length < 3) {
    return result; // return an empty array for arrays with one or two elements as there is no middle
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

module.exports = middle;

//TEST CODE
// middle([1]); // => []
// middle([1, 2]); // => []
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]