//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${actual} === ${expected}`);
  } else {
    console.log(`${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(allObject, givenValue) {
  //Scan the Object
  for (let someKey in allObject) {
    // Return the first key which contains the given value.
    if (allObject[someKey] === givenValue) {
      return allObject[someKey];
    }
  }
  return undefined;
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));