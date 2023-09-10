const asyncFunctions = function(waitTime, logMsg, rsvMsg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(logMsg);
      resolve(rsvMsg);
    }, waitTime);
  });
}

export const asyncFunctionsTwice = async function(listInput) {

  await asyncFunctions(list);
}


export default asyncFunctions;
