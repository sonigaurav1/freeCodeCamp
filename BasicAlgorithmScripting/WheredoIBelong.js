
// // Return the lowest index at which a value (second argument) should 
// be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.

// // For example,
// //  getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0),
// //  but less than 2 (index 1).

// // Likewise,
// //  getIndexToIns([20,3,5], 19) should return 2 because once the array 
// has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2)
//  and greater than 5 (index 1).

//TEST
function getIndexToIns(arr, num) {
    let arr1 = [...arr];
    let newArr = []; //[3, 5, 10]
    let index;
    for (let i = 0; i < arr.length; i++) {
      let maxNum = Math.max.apply(null, arr1);
      newArr.unshift(maxNum);
      let maxIndex = arr1.indexOf(maxNum);
      arr1.splice(maxIndex, 1);
    }
    console.log(newArr);
    for (let j = 0; j < arr.length; j++) {
      if (newArr[j] >= num) {
        index = newArr.indexOf(newArr[j]);
      }
      else if(index === undefined) {
        return newArr.length;
      }
    }
    return index;
  }
  console.log(getIndexToIns([2, 5, 10], 15));