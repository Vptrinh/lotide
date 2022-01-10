//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${actual} === ${expected}`);
  } else {
    console.log(`${actual} !== ${expected}`);
  }
};

//TEST CODE
assertEqual("Lighthouse Labs","Bootcamp");
assertEqual(1,1);

//FUNCTION TO RETURN THE LAST ITEM OF AN ARRAY

const tail = function(array) {
  let newTail = [];
  for (let i = 1; i < array.length; i ++) {
    newTail.push(array[i]);
  }
  return newTail;
};

//TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!