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
