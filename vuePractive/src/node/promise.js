const promiseFunc = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hello");
    resolve("??");
    // reject("!!");
  }, 300);
});

promiseFunc.then(
  (val) => {console.log("done", val)},
  (val) => {console.log("reject", val)}
);
