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
