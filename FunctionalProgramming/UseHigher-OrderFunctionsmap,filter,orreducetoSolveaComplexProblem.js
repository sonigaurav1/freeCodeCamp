// Now that you have worked through a few challenges using higher-order 
// functions like map(), filter(), and reduce(), you now get to apply 
// them to solve a more complex challenge.

// Complete the code for the squareList function using any combination 
// of map(), filter(), and reduce(). The function should return a new 
// array containing the squares of only the positive integers (decimal
//      numbers are not integers) when an array of real numbers is 
//      passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.

//TEST
const squareList = arr => {
    // Only change code below this line
    return arr.filter(int => Number.isInteger(int))
    .filter(int => int>0)
    .map(int => int**2)
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);