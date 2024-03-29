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
  const c = ["c", "d", "e"];
  const d = c.map((dat) => {
    console.log(dat);
    return dat + "aaaa";
  });
  const e = d.map((dat) => {
    console.log(dat);
  });
  const f = e.map((dat) => {
    console.log(dat);
  })
  console.log(f);
  f.forEach((dat) => {
    console.log(dat);
  });
  console.log("end of func");
  return a;
}


export default asyncFunctions;
