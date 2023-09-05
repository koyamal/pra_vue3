export default asyncFunctions = function(waitTime, logMsg, rsvMsg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(logMsg);
      resolve(rsvMsg);
    }, waitTime);
  });
}
