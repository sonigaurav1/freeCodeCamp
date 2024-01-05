// We'll pass you an array of two numbers. Return the sum of those 
// two numbers plus the sum of all the numbers between them. The
//  lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all
//  the numbers between 1 and 4 (both inclusive) is 10.

//TEST
function sumAll(arr) {
    let maxNum = Math.max.apply(null,arr);
    let minNum = Math.min.apply(null,arr);
    let sum = 0;
    for(let i = minNum; i <= maxNum; i++){
      sum = sum + i;
    }
    return sum;
  }
  
  console.log(sumAll([4, 1]));

  function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll([1, 4]);

  const sumAll = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };

  function sumAll(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll([1, 4]);