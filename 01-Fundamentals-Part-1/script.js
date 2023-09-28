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

/** Coding challenge #2 */

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

/** Type Conversion and Coercion */
console.log("9" - "5"); //=> 4
console.log("19" - "13" + "17"); // => 617
console.log("19" - "13" + 17); //=> 23
console.log("123" < 57); //=> false
console.log(5 + 6 + "4" + 9 - 4 - 2); //=> 1143

/** Equality Operators: == vs. === */
// const numNeighbors = prompt("How many neighbor countries does your country have");

// const numNeighbors = Number(prompt("How many neighbor countries does your country have"));

// if (numNeighbors === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No borders");
// }

/** Logical Operators */
if (language === "English" && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`);
}

/** Coding challenge #3 */
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy 🏆");
} else {
    console.log("No team win the trophy 🏆");
}
