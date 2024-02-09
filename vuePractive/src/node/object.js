const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

console.log(myCar);
console.log(myCar.color);
console.log(myCar["make"]);


var myObj = new Object(),
  str = "myString",
  rand = Math.random(),
  obj = new Object();

myObj.type = "ドット表記";
myObj["date created"] = "空白入りの文字列";
myObj[str] = "文字列の値";
myObj[rand] = "乱数";
myObj[obj] = "オブジェクト";
myObj[""] = "空文字列も可能";

console.log(myObj);

for(let i in myObj) {
  console.log(i);
  console.log(myObj[i]);
}

console.log(Object.keys(myObj));

console.log(Object.getOwnPropertyNames(myObj));

var obj = {
  property_1: "value_1",
  2: "value_2",
  "property n": "value_n",
};

console.log(obj);

const myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: {height: 100, width: 200} } };

console.log(myHonda);

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.displayCar = function displayCar() {
    var result = "美しい " + this.year + "年式 " + this.make + " " + this.model;
    console.log(result);
  }
}

// const kenscar = new Car("Nissan", "300ZX", 1992);
// const vpgscar = new Car("Mazda", "Miata", 1990);

// console.log(kenscar);
// console.log(vpgscar);

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const kinnon = new Person("Rand McKinnon", 33, "M");
const ken = new Person("Ken Jones", 39, "M");

const car1 = new Car("Eagle", "Talon TSi", 1993, kinnon);
const car2 = new Car("Nissan", "300ZX", 1992, ken);

car1.displayCar();
car2.displayCar();

console.log(car1);

console.log(car2.owner.name);

car1.color = "black";
console.log(car1);


const myOBJ = {
  myMethod: function(params) {
    console.log("=======start=======");
    console.log(params);
    console.log("=======end=======");
  },

  myOtherMethod(params) {
    console.log("=======START=======");
    console.log(params);
    console.log("=======END=======");
  }
};

myOBJ.myMethod("myObj");
myOBJ.myOtherMethod("myObj");

const mA = {
  name: 'Tom',
  age: 23
}

const mB = {
  name: 'Bob',
  age: 25
}

const sayName = function() {
  console.log(`My name is ${this.name}`);
}

mA.sayName = sayName;
mB.sayName = sayName;

mA.sayName();
mB.sayName();

const getSetObj = {
  a : 100,
  get b() {
    return this.a * 10;
  },
  set c(x) {
    this.a = x * 2;
  }
}

console.log(getSetObj.a);
console.log(getSetObj.b);
getSetObj.c = 5;
console.log(getSetObj.a);

const deleteObj = {
  age: 23,
  height: 222,
  width: 100,
}
console.log(deleteObj);
delete deleteObj.height;
console.log(deleteObj);

console.log("height" in deleteObj);

const objA = {
  name: 'apple',
};

const objB = {
  name: 'apple',
}

console.log(objA === objB? 'objA === objB': 'objA != objB');

const objC = objA;

console.log(objA === objC? 'objA === objC': 'objA != objC');

objA.name = 'orange';
console.log(objC.name);

const key_filename = './helloworld.json';

const newInstance = {
  pjId: 'pj23498734',
  ...(false && {keyFilename: key_filename}),
};
