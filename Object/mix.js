const obj = { name: 'Bobby', country: 'Chile' };

const keys = Object.keys(obj);
console.log(keys); // 👉️ ['name', 'country']

const values = Object.values(obj);
console.log(values); // 👉️ ['Bobby', 'Chile']

const entries = Object.entries(obj);
console.log(entries); // 👉️ [['name', 'Bobby'], ['country', 'Chile']]
