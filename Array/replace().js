let text = "    Hello World!    ";
let result = text.replace(/^\s+|\s+$/gm,''); // 'f' => fHello World!f
console.log(result);

let str = 'Welcome! home';
console.log(str.replace('home', 'to Heaven'))

/**The replace() method searches a string for a value or a regular expression.

The replace() method returns a new string with the value(s) replaced.

The replace() method does not change the original string. */