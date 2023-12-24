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


// const re = /abc/;

// console.log(checkRe('abc' ,"Hello, abcdefg"));
// console.log(checkRe('abc' ,"Hello, cbadefg"));
// console.log(checkRe('abc' ,"Helloa bcefg"));


//  1 個の "a" に 0 個以上の "b" が続き、さらに "c" が続くものに一致させる
console.log(checkRe('ab*c', 'aac'));
console.log(checkRe('ab*c', 'aabc'));
console.log(checkRe('ab*c', 'aabbbbbbbc'));
