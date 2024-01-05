const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const usersObj = users.reduce((sum, obj) => sum + obj.age, 0);
console.log(usersObj);

const users1 = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "camperCat", age: 10 },
  ];
  
  const usersObj1 = users1.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
  }, {});
  console.log(usersObj1);
  