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
      console.log(allObject[someKey]);
      return allObject[someKey];
    } else {
      return undefined;
    }
  }
};




const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);