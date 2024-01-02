// The Array.map() method creates a new array from the
// results of calling a function for every element.

const numbers = [4, 9, 16, 25];

console.log(numbers.map(Math.sqrt));

console.log(
  numbers.map((number) => {
    return number * 2;
  })
);
