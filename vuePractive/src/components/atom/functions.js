const asyncFunctions = function(waitTime, logMsg, rsvMsg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(logMsg);
      resolve(rsvMsg);
    }, waitTime);
  });
}

export const asyncFunctionsTwice = async function(listInput) {
  for(data in listInput) {
    await asyncFunctions(data['waitTime'], data['logMsg'], data['rsvMsg']);
  }
}


export default asyncFunctions;
