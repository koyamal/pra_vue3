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
}

const myInstance = new MyClass('bob');
console.log(myInstance);
myInstance.myMethod();
