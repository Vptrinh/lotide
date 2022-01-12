const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${actual} === ${expected}`);
  } else {
    console.log(`${actual} !== ${expected}`);
  }
};

//FUNCTION IMPLEMENTATION

const countLetters = function(string) {
  let result = {};
  for (let letters of string) {
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  return result;
};

// TEST CODE
console.log(countLetters("This is a dog."));