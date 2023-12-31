"use strict";

/** Functions */
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const descVietnam = describeCountry("Vietnam", 97, "Ha Noi");
const descAmerica = describeCountry("America", 333, "New York");
const descChina = describeCountry("China", 1412, "Beijing");

console.log(descVietnam, descAmerica, descChina);

/** Function Declarations vs Expressions */
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percVietnam1 = percentageOfWorld1(97);
const percUSA1 = percentageOfWorld1(333);
const percChina1 = percentageOfWorld1(1412);

console.log(percVietnam1, percUSA1, percChina1);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const percVietnam2 = percentageOfWorld2(97);
const percUSA2 = percentageOfWorld2(333);
const percChina2 = percentageOfWorld2(1412);

console.log(percVietnam2, percUSA2, percChina2);

/** Arrow Functions */
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percVietnam3 = percentageOfWorld3(97);
const percUSA3 = percentageOfWorld3(333);
const percChina3 = percentageOfWorld3(1412);

console.log(percVietnam3, percUSA3, percChina3);

/** Functions Calling Other Functions */
const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
};

console.log(describePopulation("Vietnam", 97));
console.log(describePopulation("USA", 333));
console.log(describePopulation("China", 1412));

/** Coding Challenge #1 */
function calcAverage(firstTime, secondTime, thirdTime) {
    return (firstTime + secondTime + thirdTime) / 3;
}

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas && avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins && avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
};

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
checkWinner(avgDolphins1, avgKoalas1);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgDolphins2, avgKoalas2);

/** Introduction to Arrays */
const populations = [97, 333, 1412, 126];
console.log(populations);
console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[populations.length - 1]),
];
console.log(percentages);

/** Basic Array Operations */
const neighbors = ["China", "Laos", "Cambodia"];

neighbors.push("Utopia");
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes("Germany")) {
    console.log("Probably not a central European country :D");
}

neighbors[neighbors.indexOf("China")] = "Chinaaaaaaa";
console.log(neighbors);

/** Coding challenge #2 */
const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

/** Introduction to Objects */
const myCountry = {
    country: "Vietnam",
    capital: "Hanoi",
    language: "vietnamese",
    population: 97,
    neighbors: ["China", "Laos", "Cambodia"],

    describe: function () {
        console.log(
            `${this.country} has ${this.population} million of ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital call ${this.capital}`
        );
    },
    checkIsland: function () {
        this.isIsland = neighbors.length == 0 ? true : false;
    },
};
console.log(myCountry);

/** Dot vs. Bracket Notation */
console.log(
    `${myCountry.country} has ${myCountry.population} million of ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital call ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry);
myCountry["population"] -= 2;
console.log(myCountry);

/** Object Methods */
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);

/** Coding challenge #3 */
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi} is higher than ${john.fullName}'s (${john.bmi}))!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi} is higher than ${mark.fullName}'s (${mark.bmi}))!`);
}

/** The for Loop */
for (let order = 1; order <= 50; order++) {
    console.log(`Voter number ${order} is currently voting`);
}

/** Looping Arrays, Breaking and Continuing */
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

/** Looping Backwards And Loops in Loops */
const listOfNeighbors = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];
for (let i = 0; i < listOfNeighbors.length; i++) {
    for (let j = 0; j < listOfNeighbors[i].length; j++) {
        console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
    }
}

/** The while loop */
let i = 0;
const percentages3 = [];
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}
console.log(percentages3);

/** Coding challenge #4 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}
console.log(tips);
console.log(totals);

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));
