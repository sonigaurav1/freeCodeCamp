/* Given a positive integer num, return the sum of all odd Fibonacci
 numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every
additional number in the sequence is the sum of the two previous
numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci
numbers less than or equal to 10 are 1, 1, 3, and 5.
 */
//TEST
function sumFibs(num) {
  let minNum = 0;
  let maxNum = 1;
  let myArr = [];
  for (let i = 0; i < num + 1; i++) {
    if (minNum % 2 == 1) {
      myArr.push(minNum);
    }
    let temp = minNum + maxNum;
    minNum = maxNum;
    maxNum = temp;
  }
  return myArr
    .filter((num1) => num1 <= num)
    .reduce((sum, num) => {
      return sum + num;
    }, 0);
}
console.log(sumFibs(75025));

function sumFibs(num) {
    let minNum = 0;
    let maxNum = 1;
    let sum = 0;
    while (maxNum <= num) {
      if (maxNum % 2 == 1) {
        sum += maxNum;
      }
      let temp = minNum + maxNum;
      minNum = maxNum;
      maxNum = temp;
    }
    return sum;
  }
  
  console.log(sumFibs(1000));

  function sumFibs(num) {
    let minNum = 0;
    let maxNum = 1;
    let sum = 0;
    while (maxNum <= num) {
      if (maxNum % 2 == 1) {
        sum += maxNum;
      }
      maxNum += minNum;
      minNum = maxNum - minNum;
    }
    return sum;
  }
  
  console.log(sumFibs(1000));