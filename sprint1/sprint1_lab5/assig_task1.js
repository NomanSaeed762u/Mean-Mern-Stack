const obj1 = { 
  name: 'sajjad', 
  age: 30 };
const obj2 = { 
  gender: 'male', 
  city: 'lahor' };
const obj3 = { 
  sports : 'cricket' };

const mergedObj = { ...obj1, ...obj2, ...obj3 };

console.log(mergedObj);
