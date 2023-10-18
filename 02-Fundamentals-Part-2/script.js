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
