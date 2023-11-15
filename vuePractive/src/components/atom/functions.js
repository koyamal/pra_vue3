export function makeFunc(waitTime, logMsg, rsvMsg) {
  function asyncfunction() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(logMsg);
        resolve(rsvMsg);
      }, waitTime);
    });
  }
  return asyncfunction;
}

const asyncFunctions = function(waitTime, logMsg, rsvMsg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(logMsg);
      resolve(rsvMsg);
    }, waitTime);
  });
}

export const asyncFunctionsTwice = async function(listInput) {
  const a = [];
  const b = ["a", "b"];
  console.log(b);
  for(const data of listInput) {
    a.push(await asyncFunctions(data['waitTime'], data['logMsg'], data['rsvMsg']));
  }
  return a;
}


export default asyncFunctions;
