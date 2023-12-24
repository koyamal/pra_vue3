const checkText = function(value) {
  return /^(?=.*[<>\s]).*$/.test(value);
}


// console.log(checkText("helle "));
// console.log(checkText(" hel le"));
// console.log(checkText("hel　le"));


const re = /abc/;

console.log(re.test("Hello, abcdefg"));
