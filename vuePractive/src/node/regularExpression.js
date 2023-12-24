const checkText = function(value) {
  return /^(?=.*[<>\s]).*$/.test(value);
}

const checkRe = (reg, value) => {
  const re = new RegExp(reg);
  return re.test(value);
}


// console.log(checkText("helle "));
// console.log(checkText(" hel le"));
// console.log(checkText("hel　le"));


const re = /abc/;

console.log(checkRe('abc' ,"Hello, acdefg"));
console.log(checkRe('abc' ,"Hello, cbadefg"));
