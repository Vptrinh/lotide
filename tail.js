// test/assertEqualTest.js
const assertEqual = require ('./assertEqual');

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

