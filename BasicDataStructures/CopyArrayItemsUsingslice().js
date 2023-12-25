//  slice() takes only 2 parameters — the first is the index
//  at which to begin extraction, and the second is the index 
//  at which to stop extraction 

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3); // 1 index to take & 3 to STOP, 3 index will not be taken 2 will be TAKEN
console.log(todaysWeather);
// todaysWeather would have the value ['snow', 'sleet'], 
// while weatherConditions would still have ['rain', 'snow', 'sleet', 'hail', 'clear'].



let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
console.log(array);
// Here we remove 2 elements, beginning with the third element (at index 2). array would have the value ['today', 'was', 'great'].