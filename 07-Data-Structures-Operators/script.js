'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

/** Destructuring Arrays */
// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x, y, z); // 1, 2, 3

const [starter, mainCourse] = restaurant.order(1, 1);
console.log(starter, mainCourse);

//Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2, 5, 6

//Switching values
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Default values
const [p = 1, q = 1, r = 1] = [3, 4];
console.log(p, q, r); // 3, 4, 1

/** Destructuring Objects */
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

restaurant.orderDelivery({
  time: '22:00',
  address: 'ABC Mau Than',
  starterIndex: 2,
  mainIndex: 0,
});

restaurant.orderDelivery({
  address: 'ABC Mau Than',
  mainIndex: 2,
});

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating the variables
let a = 111;
let b = 999;
const obj = { a: 22, b: 10, c: 5 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

/** The Spread Operator (...) */
const arr = [8, 9, 10];
const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 8, 9, 10]
console.log(...newArr); //1, 2, 8, 9, 10

const newMenu = [...restaurant.mainMenu, 'Gnooci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterable: arrays, strings, maps, sets. NOT objects
const str = 'Dat';
const letter = [...str, '', 'Mr.'];
console.log(letter);
console.log(...str);

//Objects
const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
