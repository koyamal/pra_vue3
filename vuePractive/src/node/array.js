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

const int32View = new Int32Array(buffer);

for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}

const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Entry ${i}: ${int16View[i]}`);
}

int16View[0] = 32;
console.log(`Entry 0 in the 32-bit array is now ${int32View[0]}`);

const buffer2 = new ArrayBuffer(24);

// ... read the data into the buffer ...

const idView = new Uint32Array(buffer2, 0, 1);
const usernameView = new Uint8Array(buffer2, 4, 16);
const amountDueView = new Float32Array(buffer2, 20, 1);

const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = Array.from(typedArray);

const normalArray2 = [...typedArray];
console.log(normalArray2);
