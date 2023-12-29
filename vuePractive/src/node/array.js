const element0 = {name: 'Tom', age: 18};
const element1 = {name: 'Bob', age: 23};
const element2 = {name: 'Jhon', age: 22};

const arr1 = new Array(element0, element1, element2);
const arr2 = Array(element0, element1, element2);
const arr3 = [element0, element1, element2];

console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log(arr1['length']);

arr1.length = 0;
console.log(arr1);
console.log(arr2);
