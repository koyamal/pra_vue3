const promiseFunc = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hello");
    // resolve();
    reject();
  }, 1000);
});

promiseFunc.then(() => {console.log("done")}, () => {console.log("reject")});
