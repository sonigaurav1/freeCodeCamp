// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

//TEST
function titleCase(str) {
  let changedStr = str.split(" ");
  let singleStr = [];
  for (let i = 0; i < changedStr.length; i++) {
    singleStr.push(changedStr[i].at(0).toUpperCase());
    for (let j = 1; j < changedStr[i].length; j++) {
      singleStr.push(changedStr[i].at(j).toLowerCase());
    }
    if (i + 1 < changedStr.length) {
      singleStr.push(" ");
    }
  }
  return singleStr.join("");
}
console.log(titleCase("sHoRt AnD sToUt"));

//Alternative Method
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }