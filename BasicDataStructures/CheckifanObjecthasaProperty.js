// Now we can add, modify, and remove keys from objects. 
// But what if we just wanted to know if an object has a 
// specific property? JavaScript provides us with two different
//  ways to do this. One uses the hasOwnProperty() method 
//  and the other uses the in keyword. If we have an object
//   users with a property of Alan, we could check for
//    its presence in either of the following ways:
 const users = {
    'name': 'Alan',
    age: 20
 }
users.hasOwnProperty('name');
console.log('name' in users);

// Both of these would return true.
