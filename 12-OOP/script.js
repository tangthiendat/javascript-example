'use strict';
/** Constructor functions and new Operator */
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const dat = new Person('Dat', 2003);
console.log(dat);
console.log(dat instanceof Person);
const matilda = new Person('Matilda', 2017);
//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

/** Prototypes */
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
dat.calcAge();
matilda.calcAge();

console.log(dat.__proto__);
console.log(dat.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(dat));

/** Prototypal Inheritance on Built-in Object */
console.log(dat.__proto__);
console.log(dat.__proto__.__proto__);

console.dir(Person.prototype.constructor);
const arr = [3, 7, 2, 0, 5, 1, 3];
console.log(arr.__proto__ == Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

/** Coding challenge #1 */
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`This ${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`This ${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();

/** ES6 Classes */
//Class expression
// const personCl = class {};

//Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  //Set a property that already exists
  set fullName(name) {
    if (name.includes('')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }
}
const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

//1. Classes are NOT hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode

/** Getters and Setters */
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
