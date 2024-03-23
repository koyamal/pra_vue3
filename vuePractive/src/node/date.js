const newDate = new Date();

console.log(newDate);

console.log(newDate.now);
console.log(newDate.getDate());
console.log(newDate.getDay());

console.log(newDate.getFullYear());

console.log(newDate.getHours());

console.log(newDate.getMinutes());

console.log(newDate.getMilliseconds());

console.log(newDate.getMonth());

console.log(newDate.getSeconds());

console.log(newDate.getTime());

console.log(newDate.getUTCDate());

console.log(newDate.getUTCFullYear());

console.log(newDate.getUTCHours());

console.log(newDate.getUTCMilliseconds());

console.log(newDate.getUTCMinutes());

console.log(newDate.getUTCMinutes());

console.log(newDate.getUTCMonth());

console.log(newDate.getUTCSeconds());

console.log(newDate.getYear());

console.log(newDate.setDate());

console.log(newDate.setFullYear());

console.log(newDate.setHours());

console.log(newDate.setMilliseconds());

console.log(newDate.setMinutes());

console.log(newDate.setMonth());

console.log(newDate.toJSON());

console.log(newDate.valueOf());

const a = {date: "aaa"};
console.log({...a, user: "bbb"});

const b = [1, 2, 4, 6, 7];
const c = [...b, 10];
console.log(c);

const d = [...c, ...b];

console.log(Number("123"));
console.log(Number("123")+ Number("456"));
console.log(Number("123") === 123);
const strNumber = "1234";
console.log(Number(strNumber) + 1);

console.log("true", Number(true));

console.log("undefined", Number(undefined));

console.log("null", Number(null));

console.log(Number.MAX_VALUE);

let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => {
  console.log(...objects);
  return { ...objects };
}

console.log("1" === 1);
console.log("1" === "1");
console.log(true === 1);

let mergedObj1 = merge(obj1, obj2);
console.log(mergedObj1);

const wait = (sec) => {
  return new Promise((resolve) => {
    setTimeout(() => {resolve("resolve called")}, sec);
  });
}
(async () => {
  const a = await wait(3000);
  console.log(a);
  console.log("hello")
})()
