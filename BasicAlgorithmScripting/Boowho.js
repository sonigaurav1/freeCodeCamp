//It was harder than I thought

// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

//TEST
function booWho(bool) {
  let checkedBool = typeof bool;
  if (checkedBool === "boolean") {
    return true;
  } else {
    return false;
  }
}

console.log(booWho([1, 2]));
