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
 * 0 ~ 1 の乱数
 */
console.log(Math.random());

console.log(Math.random());

function getRandValue(max) {
  return Math.random() * max;
}

console.log(getRandValue(100));

/**
 * Math.round()
 * 四捨五入して整数を表示
 */
console.log(Math.round(5.4)); // 5
console.log(Math.round(5.5)); // 6

/**
 * Math.min()
 * 最小
 */
console.log(Math.min(13,5,6,7,8));

/**
 * Math.max()
 * 最大
 */
console.log(Math.max(13,5,6,7,8));

/**
 * Math.pow(base, exponent)
 * baseのexponent乗
 */
console.log(Math.pow(2, 8));
