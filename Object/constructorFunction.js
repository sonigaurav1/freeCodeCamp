function ConstructorName(parameter1, parameter2,) {
    // Property assignments
    this.property1 = value1;
    this.property2 = value2;
    // ...
    
    // Method definitions
    this.method1 = function() {
      // Method logic
    };
    this.method2 = function() {
      // Method logic
    };
    // ...
  }

  function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.sayHello = function() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    };
  }
  
  var person1 = new Person("Alice", 25);
  person1.sayHello(); // Output: Hello, my name is Alice and I am 25 years old.