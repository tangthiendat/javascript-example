'use strict';

/** Default parameters */
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

/** How passing arguments work Value vs. Reference */
const flight = 'LH234';
const dat = {
  name: 'Thien Dat',
  passport: 14823942343,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 14823942343) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, dat);
console.log(flight);
console.log(dat);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(dat);
// checkIn(flight, dat);
console.log(dat);
