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

//FUNCTION TO RETURN THE FIRST ITEM IN THE ARRAY

let head = function(array){
  let firstItem = array[0]
  return firstItem;
}

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");