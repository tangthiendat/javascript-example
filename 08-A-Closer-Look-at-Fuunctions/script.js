'use strict';

/** Default parameters */
const bookings = [];

const createBooking = function (
  fligtNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    fligtNum,
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
