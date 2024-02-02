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

arr1.length = 2;
console.log(arr1.length);
console.log(arr2.length);

const buffer = new ArrayBuffer(16);
if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}
