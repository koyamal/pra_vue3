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
// console.log(checkRe('ab*c', 'aac'));
// console.log(checkRe('ab*c', 'aabc'));
// console.log(checkRe('ab*c', 'aabbbbbbbc'));

// 先頭のAを検出
// console.log(checkRe('^A', 'Abc')); // true
// console.log(checkRe('^A', 'bAc')); // false
// console.log(checkRe('^A', 'b Ac')); // false

// 末尾のtを検出
// console.log(checkRe('t$', 'eat')); // true
// console.log(checkRe('t$', 'top')); // false
// console.log(checkRe('t$', 'topt ')); // false

// 区切り前のooを検出
console.log(checkRe(/oo\b/, 'moon')); // false
console.log(checkRe(/oo\b/, 'moo n')); // true
console.log(checkRe(/oon\b/, 'moon')); // true

