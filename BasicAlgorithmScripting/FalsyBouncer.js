// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

//TEST
function bouncer(arr) {
    let newArr = arr.slice();
    let checkedArr = [];
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i]) {
        checkedArr.push(newArr[i]);
      }
    }
    return checkedArr;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));

  //Alternative Method
  function bouncer(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) filteredArr.push(arr[i]);
    }
    return filteredArr;
  }

  //SHORTEST
  function bouncer(arr) {
    return arr.filter(Boolean);
  }