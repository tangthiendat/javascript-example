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
const percAmerica1 = percentageOfWorld1(333);
const percChina1 = percentageOfWorld1(1412);

console.log(percVietnam1, percAmerica1, percChina1);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const percVietnam2 = percentageOfWorld2(97);
const percAmerica2 = percentageOfWorld2(333);
const percChina2 = percentageOfWorld2(1412);

console.log(percVietnam2, percAmerica2, percChina2);
