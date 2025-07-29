"use strict";

// the concept of closure explained

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
// secureBooking();
const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
