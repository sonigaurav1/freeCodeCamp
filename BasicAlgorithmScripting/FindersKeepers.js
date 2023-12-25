
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x,
//  the 'truth test' is passed if func(x) is true. If no element passes the test,
//  return undefined.

//TEST
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        return arr[i];
      }
      // else{
      //   return undefined;
      // }
    }
    return undefined;
  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

  //Alternative Method
  function findElement(arr, func) {
    return arr.find(func); /* Int8Array.find(predicate: (value: number, index: number, obj: Int8Array) 
                           => boolean, thisArg?: any): number | undefined
                              find calls predicate once for each element of 
                              the array, in ascending order, until it finds 
                              one where predicate returns true. If such an 
                              element is found, find immediately returns that
                              element value. Otherwise, find returns undefined.
    
                              Returns the value of the first element in the array 
                              where predicate is true, and undefined otherwise. */
  }
