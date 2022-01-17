const assertEqual = require ('../assertEqual');

//TEST CODE
const result = (["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"]; // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!