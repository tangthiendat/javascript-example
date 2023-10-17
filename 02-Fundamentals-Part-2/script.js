"use strict";

/** Functions */
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const descVietnam = describeCountry("Vietnam", 97, "Ha Noi");
const descAmerica = describeCountry("America", 333, "New York");
const descChina = describeCountry("China", 1410, "Beijing");

console.log(descVietnam, descAmerica, descChina);
