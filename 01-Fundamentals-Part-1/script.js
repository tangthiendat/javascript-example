/** Values and Variables */

let country = "Vietnam";
let continent = "Asia";
let population = 97;

// console.log(country);
// console.log(continent);
// console.log(population);

/** Data Types*/
let isIsland = true;
let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

/** let, const and var */
language = "Vietnamese";
// const country = "Vietnam";
// const continent = "Asia";
// const isIsland = true;
// isIsland = false;

/** Basic Operators */
console.log(population / 2);
population++;
console.log(population / 2);
console.log(population > 6);
console.log(population > 33);
const description1 = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description1);

/** Coding challenge #1 */
const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

const BMIMark = weightMark / heightMark ** 2;
const BMIJohn = weightJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

/** String and Template Literals */
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);
