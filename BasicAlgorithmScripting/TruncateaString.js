// Truncate a string (first argument) if it is longer
//  than the given maximum string length (second argument).
//  Return the truncated string with a ... ending.

function truncateString(str, num) {
  let strlength = str.length;
  let myStr = "";
  if (str.length > num) {
    myStr = str.slice(0, num) + "...";
  } else if (str.length <= num) {
    myStr = str;
  }
  return myStr;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//Alternate Method
function truncateString(str, num) {
    if(str.length > num){
        return str.slice(0, num)+"...";
    }
    else{
        return str;
    }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }