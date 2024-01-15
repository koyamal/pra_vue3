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
  constructor(r, g, b) {
    this.values = [r, g, b];
    this.getBlue = function() {
      return this.values[2];
    }
  }
  getRed() {
    return this.values[0];
  }
}

const red = new Color(255, 0, 0);
console.log(red);
console.log(red.getRed());
