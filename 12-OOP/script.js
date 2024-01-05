'use strict';
/** Constructor functions and new Operator */
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const dat = new Person('Dat', 2003);
console.log(dat);
console.log(dat instanceof Person);
//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}
