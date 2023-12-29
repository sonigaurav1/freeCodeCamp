// You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

function Bird(name) {
  this.name = name; //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

// Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);

// console.log(ownProps) would display ["name"] in the console, and console.log(prototypeProps) would display ["numLegs"].

//IT'S MY WAY
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps1 = [];
let prototypeProps1 = [];

// Only change code below this line
for (let key in beagle) {
  if (key in beagle) {
    ownProps.push(key);
  } else {
    prototypeProps.push(key);
  }
}
console.log(ownProps);
console.log(prototypeProps);

//OUTPUT
// [ 'name', 'numLegs' ]
// []

//DESIRABLE
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle1 = new Dog("Snoopy");

let ownProps2 = [];
let prototypeProps2 = [];

// Only change code below this line
for (let key in beagle) {
  if (beagle.hasOwnProperty(key)) {
    ownProps.push(key);
  } else {
    prototypeProps.push(key);
  }
}
console.log(ownProps);
console.log(prototypeProps);

//OUTPUT
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle33 = new Dog("Snoopy");
  
  let ownProps3 = [];
  let prototypeProps3 = [];
  
  // Only change code below this line
  for (let key in beagle) {
    if (beagle.hasOwnProperty(key)) {
      ownProps.push(key);
    }
    else {
      prototypeProps.push(key);
    }
  }
  console.log(ownProps);
  console.log(prototypeProps);
