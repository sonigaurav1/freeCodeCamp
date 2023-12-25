// Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

// Usernames can only use alphanumeric characters.

// The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

// Username letters can be lowercase and uppercase.

// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// Change the regex userCheck to fit the constraints listed above.

//TEST
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // ^ => check kare k first me aata ki na, 
                                                  // + extra aata tw aaye de, 
                                                  // * aata tw thik ba na o aai tw kono tension naikhe
                                                  // $ check kare k last me aata ki na
let result = userCheck.test(username);