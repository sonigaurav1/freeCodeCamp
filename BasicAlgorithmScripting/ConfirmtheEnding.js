// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method,
//  which was introduced in ES2015. But for the purpose of this challenge,
//  we would like you to use one of the JavaScript substring methods instead.

//TEST
function confirmEnding(str, target) {
  let strLength = str.length;
  let targetLength = target.length;
  let lastName = str.substring(strLength - targetLength);
  if (lastName == target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "an"));

// Alternative Method
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target; //
}
console.log(confirmEnding("Hello", "lo"));

function confirmEnding(str, target) {
  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));

function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

confirmEnding("Bastian", "n");
