// Return the length of the longest word in the provided sentence.

// Your response should be a number.

//My Method
function findLongestWordLength(str) {
    let subString = str.split(" ");
    let count = [];
    for(let i = 0; i < subString.length; i++){
      let num = subString[i].length;
      count.push(num);
    }
    let final = Math.max.apply(null,count);
    return final;
  }

  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  

//Alternative Method
function findLongestWordLength(str) {
    let subString = str.split(" ");
    let longestStr = 0;
    for (let i = 0; i < subString.length; i++) {
      if (subString[i].length > longestStr) {
        longestStr = subString[i].length;
      }
    }
    return longestStr;
  }
  
  console.log(
    findLongestWordLength("The quick brown fox jumped over the lazy dog")
  );