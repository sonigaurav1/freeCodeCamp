// Class methods are created with the same syntax as object methods.
// Use the keyword class to create a class.
// Always add a constructor() method.
// Then add any number of methods.
// Syntax

// Simple function
function vehicle(name, maker, engine) {
  this.name = name;
  this.maker = maker;
  this.engine = engine;
}
// New keyword to create an object
let car2 = new vehicle("GT", "BMW", "1998cc");
// Property accessors
console.log(car.name);
console.log(car.maker);
console.log(car["engine"]);

// Creating js objects with object literal
let car = {
  name: "GT",
  maker: "BMW",
  engine: "1998cc",
};
// Property accessor
console.log(car.name); //dot notation
console.log(car["maker"]); //bracket notation

// Adding property to the object
car.brakesType = "All Disc";
console.log(car);

// Adding methods to the car object
let car = {
  name: "GT",
  maker: "BMW",
  engine: "1998cc",
  start: function () {
    console.log("Starting the engine...");
  },
};
car.start();
// Adding method stop() later to the object
car.stop = function () {
  console.log("Applying Brake...");
};
car.stop();

// Creating object with Object.create() method
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
// Example: This example shows the implementation of the above-explained approach.

const coder = {
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
  },
};
const me = Object.create(coder);
me.name = "Mukul";
me.isStudying = true;
me.printIntroduction();

// Using es6 classes
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
}

let car1 = new Vehicle("GT", "BMW", "1998cc");

console.log(car1.name); //GT



class ClassName {
  constructor() {}
  method_1() {}
  method_2() {}
  method_3() {}
}