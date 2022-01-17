//Implementation

const findKey = (object, callback) => {
  let keys = Object.keys(object);
  for (const key of keys) {
    if (callback(object[key])) {
      console.log(key);
      return key;
    }
  }
};

module.exports = findKey;

// findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// ); // => "noma"
