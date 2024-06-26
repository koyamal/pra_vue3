function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next: function () {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}

const iterator = makeRangeIterator(0, 5, 1);
// console.log(iterator.next());
// console.log(iterator.next());


let result = iterator.next();

while(!result.done) {
  console.log(result.value);
  result = iterator.next();
}

console.log("done");

function* makeRangeIterator2(start = 0, end = 100, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    console.log("oen time")
    yield i;
  }
  return iterationCount;
}

const ite2 = makeRangeIterator2(0, 5, 1);
console.log(ite2.next());
console.log(ite2.next());
console.log(ite2.next());
console.log(ite2.next());
console.log(ite2.next());

function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    let reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
      current = 0;
      next = 1;
    }
  }
}

const sequence = fibonacci();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);

const funcA = (val1, val2) => {
  return val1 + val2;
}

console.log(funcA(1, 3));

const funcB = (val1, val2) => val1 + val2;

console.log(funcB(1, 4));

const p8Info = 'sdjf5jf56ofd';
const keyId = 'dfkjahj67unwrj2';

if( keyId === 'dfkjahj67unwrj2') {
  console.log(p8Info);
  const keyId2 = p8Info? 'use': 'no';
  if (keyId2 === 'no') {
    console.log('no');
  }
  for (let i = 0; i < 10; i++) {
    console.log("hello")
  }
  console.log(keyId2);
}

console.log(p8Info);
