const removeFromArray = function (...args) {
    // the very first item in our list of arguments is the array, we pull it out with args[0]
    const array = args[0];
    const newArray = [];
   
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    return newArray;
  };

  removeFromArray([1, 2, 3, 4], 3);
  removeFromArray([1, 2, 3, 4], 3, 2);
  removeFromArray([1, 2, 3, 4], 7, "tacos");
  removeFromArray([1, 2, 3, 4], 7, 2);
  removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
  removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
  removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
