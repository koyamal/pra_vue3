const promiseFunc = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hello");
    // resolve();
    reject("!!");
  }, 1000);
});

promiseFunc.then((val) => {console.log("done", val)}, (val) => {console.log("reject", val)});
