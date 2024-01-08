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
