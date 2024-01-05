function ascendingOrder(arr) {
  return arr.sort((a, b) => {
    return a - b;
  });
}

console.log(ascendingOrder([1, 5, 2, 3, 4])); //[1, 2, 3, 4, 5]

function ascendingOrder(arr) {
  return arr.sort((a, b) => {
    return b - a;
  });
}

console.log(ascendingOrder([1, 5, 2, 3, 4])); //[5, 4, 3, 2, 1]

function reverseAlpha(arr) {
  return arr.sort();
}

console.log(reverseAlpha([1, 5, 7, 9, 4]));
console.log(reverseAlpha(["m", "y", "i", "t", "d"]));
console.log(reverseAlpha(["m", "y", "I", "t", "d"])); // I will be in first
console.log(reverseAlpha(["m", "y", 2, "t", 5])); // 2,5 will be in first
console.log(
  reverseAlpha([
    { x: 5, y: 8 },
    { x: 8, y: 4 },
  ])
); // Doesn't change anything

let str = "My job is serve you, not to bloow you";
let changedStr = str.split(" ");
let strLength = (strToChange) => {
  return strToChange.sort((a, b) => 
    a.length - b.length
  );
};
console.log(strLength(changedStr));


var arr =[{time:4},{time:3},{time:6}];
arr.sort(function (a, b) {
  return a.time-b.time;
});

// will mutate the original array and returns :
//     [ { time: 3 }, { time: 4 }, { time: 6 } ]
// and console.log(arr) returns
//     [ { time: 3 }, { time: 4 }, { time: 6 } ]
