let user = {
  name: "Gaurav",
  age: 20,
  sex: "male",
};

let user2 = {
  address: "Jhumka",
};
user.__proto__ = user2;

let user3 = {
  education: "+2",
};
user2.__proto__ = user3;

console.log(user.education);
