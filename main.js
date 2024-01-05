function fibo(num) {
  let minNum = 0;
  let maxNum = 1;
  let myArr = [0, 1];
  for (let i = 0; i < num; i++) {
    let temp = minNum + maxNum;
    minNum = maxNum;
    maxNum = temp;
    myArr.push(maxNum);
  }
  return myArr;
}
console.log(fibo(4));