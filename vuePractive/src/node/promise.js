const promiseFunc = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hello");
    resolve("??");
    // reject("!!");
  }, 300);
});

console.log(promiseFunc)

// promiseFunc.then(
//   (val) => {console.log("done", val)},
//   (val) => {console.log("reject", val)}
// );

// const a = promiseFunc;
// const b = a.then();

// console.log(a);
// console.log(b);
