// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

//TEST
function frankenSplice(arr1, arr2, n) {
  let changedArr1 = [...arr2]; //[4,5]
  let changedArr2 = [...arr1]; //[1,2,3]
  let removedArr2 = changedArr1.splice(n, arr2.length);
  return changedArr1.concat(changedArr2, removedArr2);
}
console.log(frankenSplice([1, 2, 3], [4, 5, 7], 1));

//With Changes
function frankenSplice(arr1, arr2, n) {
  let changedArr1 = [...arr2]; //[4,5]
  let removedArr2 = changedArr1.splice(n, arr2.length);
  return changedArr1.concat(arr1, removedArr2);
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1));

//Alternative Method
function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1); //n => from which index you want to add, 0 => no remove of element, ...arr1 => I want to add this
    return localArr;
  }