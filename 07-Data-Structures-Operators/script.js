'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
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
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  /** ES6 Enhanced Object Literals */
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 0, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

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
// let a = 111;
// let b = 999;
// const obj = { a: 22, b: 10, c: 5 };
// ({ a, b } = obj);
// console.log(a, b);

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
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

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

/** Rest pattern and parameters */
//1) Destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { weekend, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 9); //11
add(7, 5, 2, 1); //15
const x = [15, 4, 1];
add(...x); //20

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

/** Short-circuiting */
console.log('-----OR-----');
//=> return first TRUTHY value, otherwise return last value.
console.log(3 || 'Dat');
console.log('' || 'Dat');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || null || '' || 'Hello' || 23 || 0);

// const guests = restaurant.numGuests || 10;
// console.log(guests);

console.log('-----AND-----');
//=> return the first FALSY value, otherwise return last value.
console.log(0 && 'Dat');
console.log(7 && 'Dat');

console.log('Hello' && 15 && null && 'Dat');

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

/** The nullish Coalescing Operator (??)*/
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/** Logical Assignment Operator */
const res1 = {
  name: 'Capri',
  //   numGuests: 20,
  numGuests: 0,
};

const res2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR assignment operator
// res1.numGuests = res1.numGuests || 10
// res2.numGuests = res2.numGuests || 10
// res1.numGuests ||= 10;
// res2.numGuests ||= 10;

//Nullish assignment operator (null or undefined)
res1.numGuests ??= 10;
res2.numGuests ??= 10;

//AND assignment operator => Assign a value to a variable if it is currently truthy
// res1.owner = res1.owner && '<ANONYMOUS>';
// res2.owner = res2.owner && '<ANONYMOUS>';
res1.owner &&= '<ANONYMOUS>';
res2.owner &&= '<ANONYMOUS>';

console.log(res1);
console.log(res2);

/** Coding challenge #1 */
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1.
const [players1, players2] = game.players;
console.log(players1, players2);
//2.
const [gk, ...fieldsPlayer] = players1;
console.log(gk, fieldsPlayer);
//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//6.
const printGoals = function (...players) {
  console.log(...players);
  console.log(`${players.length} goals was scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimich');
printGoals(...game.scored);
//7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

/** Looping Arrays The for-of Loop */
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

for (const [i, item] of menu.entries()) {
  console.log(`${i + 1}: ${item}`);
}

/** Optional Chaining */
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [
  {
    name: 'Dat',
    email: 'dat@gmail.com',
  },
];
console.log(users[0]?.name ?? 'User array is empty');

/** Looping Objects Object Keys, Values, and Entries */
//Properties NAME
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on ${properties.length} days: ${[...properties]}.`);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}

/** Coding challenge #2 */
//1.
for (const [num, player] of game.scored.entries()) {
  console.log(`Goal ${num}: ${player}`);
}
//2.
const oddValues = Object.values(game.odds);
let sumOfOdds = 0;
for (const odd of oddValues) {
  sumOfOdds += odd;
}
console.log(`Average odd: ${sumOfOdds / oddValues.length}`);
//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
//4. Bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

/** Sets */
const ordersSet = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
]);
console.log(ordersSet);

console.log(new Set('Dat'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

/** Map Fundamentals */
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
// rest.clear();

/** Maps Iteration */
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

//Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(answer === question.get('correct')));

//Convert map to array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

/** Coding challenge #3 */
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.
const events = [...new Set([...gameEvents.values()])];
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
const matchTime = [...gameEvents.keys()].pop();
console.log(matchTime);
console.log(
  `An event happened, on average, every ${matchTime / gameEvents.size} minutes`
);

//4.
for (const [key, value] of gameEvents) {
  console.log(`[${key < 45 ? 'FIRST' : 'SECOND'} HALF] ${key}: ${value}`);
}

/** Working with Strings - Part 1 */
const airline = 'TAP Air Portugal';

console.log(airline[0]);
console.log(airline[1]);
console.log(airline[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

/** Working with Strings - Part 2 */
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'dAT';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing Emails
const email = 'hello@thiendat.com';
const loginEmail = '   Hello@ThienDat.com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

const announcement =
  'All passengers come to boarding door 23. Boarding door 23.';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus Family');
}

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
