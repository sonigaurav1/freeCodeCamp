const numbersArray = [1, 2, 3, 4, 5];
const number = 6;

if (!numbersArray.includes(number)) {
  console.log("The number is not in the array.");
}

function cleanInputString(str) {
  const strArray = str.split("");
  const cleanStrArray = [];

  for (let i = 0; i < strArray.length; i++) {
    if (!["+", "-", " "].includes(strArray[i])) {
      cleanStrArray.push(strArray[i]);
    }
  }
}
