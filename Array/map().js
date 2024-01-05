// The Array.map() method creates a new array from the
// results of calling a function for every element.

const numbers = [4, 9, 16, 25];

console.log(numbers.map(Math.sqrt));

console.log(
  numbers.map((number) => {
    return number * 2;
  })
);

function makeStrings(arr) {
  return arr.map((arr) => {
    if (arr.age >= 18) {
      return `"${arr.name} can go to The Matrix"`;
    }
    else{
      return `"${arr.name} is under age!!"`
    }
  });
}
console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]


function namesOnly(arr){
  return arr.map(num => num.name)
}
console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


function capitalizeNames(arr){
  return arr.map(num => num.toUpperCase())
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 


function stringItUp(arr){
  return arr.map(num=>String(num))
}
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

