const promiseFunc = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hello");
    resolve();
  }, 1000);
});

promiseFunc.then(() => {console.log("done")});
