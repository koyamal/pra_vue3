const wait = (sec, rejectFlag = false) => {
  return new Promise((resolve, reject) => {
    if (rejectFlag) reject("reject called");
    setTimeout(() => {resolve("resolve called")}, sec * 100);
  }).catch((e) => {
    console.log(e);
    throw new Error('Error is occured');
  });
}

(async function() {
  await wait(1).catch((e) => {
    console.log(e);
  });
})();
