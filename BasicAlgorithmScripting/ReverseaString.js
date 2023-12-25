//My Method
function reverseString(str) {
  let myStr = [];
  for (let i = 0; i < str.length; i++) {
    myStr.unshift(str[i]);
  }
  myStr = myStr.join(""); // New syntax .join("") to convert array into string olleh//If you remove "" the output will be in o,l,l,e,h
  return myStr;
}

console.log(reverseString("hello"));

//Hint Method
function reverseString(str) {
  let myStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    myStr += str[i];
  }
  return myStr;
}

console.log(reverseString("hello"));
