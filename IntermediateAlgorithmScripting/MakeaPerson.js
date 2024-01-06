// Fill in the object constructor with the following methods below:

getFirstName();
getLastName();
getFullName();
setFirstName(first);
setLastName(last);
setFullName(first, last);

/* Run the tests to see the expected output for each method. These methods must
 be the only available means of interacting with the object. Each test will
 declare a new Person instance as new Person('Bob', 'Ross').
 */
//TEST // All test passed except Object.keys(Person).length = 6 // My mistake I made this._first as property which is counted in Object.key
const Person = function (first, last) {
  this._first = first; // Change this into Variable Not Properties
  this._last = last;
  this.getFullName = function () {
    return this._first + " " + this._last;
  };
  this.getFirstName = function () {
    return this._first;
  };
  this.getLastName = function () {
    return this._last;
  };
};
Person.prototype = {
  constructor: Person,
  setFirstName(first) {
    this._first = first;
    return this.getFullName(this._first);
  },
  setLastName(last) {
    this._last = last;
    return this.getFullName(this._last);
  },
  setFullName(first, last) {
    this._first = first;
    this._last = last;
    return this.getFullName(this._first, this._last);
  },
};
const person1 = new Person("Bob", "Ross");
console.log(Object.keys(person));


const Person = function (first, last) {
  this._first = first;
  this._last = last;
  this.getFullName = function () {
    return this._first + " " + this._last;
  };
  this.getFirstName = function () {
    return this._first;
  };
  this.getLastName = function () {
    return this._last;
  };
  this.setFirstName = function (first) {
    this._first = first;
  };
  this.setLastName = function (last) {
    this._last = last;
  };
  this.setFullName = function (first, last) {
    this._first = first;
    this._last = last;
  };
};
const person = new Person("Bob", "Ross");
console.log(Object.keys(Person));


const Person = function (first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFirstName = function (first) {
    return (firstName = first);
  };

  this.setLastName = function (last) {
    return (lastName = last);
  };

  this.setFullName = function (first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};
const bob = new Person("Bob", "Ross");
console.log(bob.getFullName());
