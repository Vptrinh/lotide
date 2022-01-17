//FUNCTION IMPLEMENTATION
const assertEqual = require ('./assertEqual');


//FUNCTION TO RETURN THE FIRST ITEM IN THE ARRAY

let head = function(array) {
  let firstItem = array[0];
  return firstItem;
};

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");