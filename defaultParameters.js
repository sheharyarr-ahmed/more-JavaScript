"use strict";
const bookings = [];
const bookingFunction = function (airline, noofPsg = 3, price = 100 * noofPsg) {
  //   noofPsg = noofPsg || 2; // this can also be considered for setting an default value but this is es5
  const booking = {
    airline,
    noofPsg,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};

bookingFunction("fly", 4, 200); //in order to skip an parameter write the 'undefined' in teh place of that parameter
bookingFunction("fly", undefined, 200);
console.log(bookings);
