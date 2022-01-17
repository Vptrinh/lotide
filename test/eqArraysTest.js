const assertEqual = require ('../assertEqual');

assertEqual((["1", "2", "3"], ["1", "2", 3]), false);// => false
assertEqual(([1, 2, 3], [1, 2, 3]), true);