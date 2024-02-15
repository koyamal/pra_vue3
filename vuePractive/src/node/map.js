let sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");

console.log(sayings);

console.log(sayings.get("dog"));
console.log(sayings.has("dog"));  // true
console.log(sayings.has("bird")); // false

for (let [key, value] of sayings) {
  console.log(key + " goes " + value);
}

let mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

console.log(mySet);

const arry1 = [...mySet];
console.log(arry1);

const arry2 = Array.from(mySet);
console.log(arry2);
