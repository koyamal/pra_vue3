const bigDay = new Date(2024, 1, 10);
// console.log(bigDay);

class MyClass {
  constructor(userName) {
    this.myName = userName;
  }
  myMethod() {
    console.log(`My name is ${this.myName}`);
  }
  yourMehotd() {
    console.log(`Your name is ${this.myName}`);
  }
  static myStaticField = "bar";
}

const myInstance = new MyClass('bob');
// const myInstance2 = MyClass('bob');
console.log(myInstance);
myInstance.myMethod();

class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
    this.getBlue = function() {
      return this.#values[2];
    }
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    if(value % 3 === 0) throw new Error("Invalid value");
    this.#values[0] = value;
  }
  get red() {
    return this.#values[0];
  }
  set red(value) {
    this.#values[0] = value;
  }
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
  // deleteValues() {
  //   delete this.#values; // error
  // }
}

const red = new Color(255, 0, 0);
console.log(red);
console.log(red.getRed());

console.log(new Color().getBlue === new Color().getBlue);
console.log(new Color().getRed === new Color().getRed);

// console.log(red.#values); // error

// red.setRed(3);

const blue = new Color(0, 0, 255);
console.log(blue.red); // 0
blue.red = 100;
console.log(blue.red); // 100

class MyClassMath {
  randValue = Math.random();
  constructor() {
    this.randVal = Math.random();
  }
}
console.log(new MyClassMath().randValue);
console.log(new MyClassMath().randValue);
console.log(new MyClassMath().randVal);
console.log(new MyClassMath().randVal);

const rand1 = new MyClassMath();
const rand2 = new MyClassMath();

console.log(rand1.randValue);
// console.log(rand1.randValue);
console.log(rand2.randValue);
// console.log(rand2.randValue);

// console.log(rand1.randVal);
// console.log(rand1.randVal);
// console.log(rand2.randVal);
// console.log(rand2.randVal);

console.log(Color.isValid(2, 3, 5));

const colorA = new Color(2, 3, 5);
// console.log(colorA.isValid(2, 3, 5)); // error
// console.log(colorA.isValid()); // error

class ColorWithAlpha extends Color {
  #alpha;
  constructor(r, g, b, a) {
    super(r, g, b);
    this.#alpha = a;
  }
  get alpha() {
    return this.#alpha;
  }
  set alpha(val) {
    this.#alpha = val;
  }
}

const colorAlpha = new ColorWithAlpha(255, 255, 0, 10);
console.log(colorAlpha.alpha);
console.log(colorAlpha.red);
