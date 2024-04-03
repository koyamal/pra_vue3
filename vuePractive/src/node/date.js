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

const wait = (sec, rejectFlag = false) => {
  return new Promise((resolve, reject) => {
    if (rejectFlag) reject("reject called");
    setTimeout(() => {resolve("resolve called")}, sec * 100);
  }).catch((e) => {
    console.log(e);
    throw new Error('Error is occured');
  });
}
(async () => {
  for(let i = 1; i < 4; i++) {
    const a = await wait(i);
    const b = await wait(i);
    console.log(b);
    console.log(`NUM: ${i}`);
  }
  console.log("hello");
  try{
    const outputWait = await wait(23, true);
  }catch(error) {
    console.log(error);
  }
  console.log("after try catch");
})();

console.log(null === undefined);

const object1 = {
  name: "hello",
};

const object2 = {
  name: "hello",
};

console.log(object1 === object2); // false
console.log(object1 === object1); // true
console.log(object1 !== object2); // true
console.log(object1 !== object1); // false

console.log(true !== 1);
console.log(null !== undefined);

const x = 4;
const y = -x;
console.log(y);

const aa = '4';
const bb = -aa;

console.log(aa);
console.log(bb);

console.log(+'');

const output = void 1;
console.log(output);

void function test() {
  console.log('test function executed');
};
try {
  test();
} catch (e) {
  console.log('test function is not defined');
  // Expected output: "test function is not defined"
}

// const breakFor = () => {
//   for(let i = 0; i < 10; i++) {
//     if(i % 3 === 2) {
//       break;
//     }
//     console.log(i);
//   }
//   console.log("fin");
// }

// breakFor();


