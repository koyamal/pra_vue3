/**
 * Math.ceil()
 * 引数以上の最小の整数を返す。
 */
console.log(Math.ceil(4.4)); // 5

console.log(Math.ceil(4)); // 4

/**
 * Math.cos()
 * コサイン
 */
console.log(Math.cos(1.5707963267948966)); // ほぼゼロ

/**
 * Math..log10()
 */
console.log(Math.log10(10)); // 1
console.log(Math.log10(100)); // 2
console.log(Math.log10(1000)); // 3

const arr1 = [1, 4, 6, 8, 10];
console.log(Math.max(...arr1));

/**
 * Math.rand()
 */
console.log(Math.random());

console.log(Math.random());

function getRandValue(max) {
  return Math.random() * max;
}

console.log(getRandValue(100));
