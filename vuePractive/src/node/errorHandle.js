const a = 0;

console.log(a);

try {
  throw new Error("test");
} catch(e) {
  console.log(e.message);
}

console.log("end");
