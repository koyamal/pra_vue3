let sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");

console.log(sayings);

console.log(sayings.get("dog"));
console.log(sayings.has("dog"));  // true
console.log(sayings.has("bird")); // false
