"use strict";
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} fligth ${this.iataCode} - ${flightNum}`
    );
    this.bookings.push(`flight: ${this.iataCode} ${flightNum}, ${name}`);
  },
};

lufthansa.book(282, "sheharyar");
lufthansa.book(281, "sheharyar");
console.log(lufthansa);
console.log(lufthansa.bookings);

const book = lufthansa.book;
// bookFunction(222, hello); //not working

// now for another airline and now we will put book function in it from the outside by choosing explicitly fli jinnah airline instead of using this keyword
const flyJinnah = {
  airline: "fly-jinnah",
  iataCode: "9F",
  bookings: [],
};

book.call(flyJinnah, 222, "sheharyar");
console.log(flyJinnah);

// now by using apply method same functionality

const passengerData = [222, "hania"];
book.call(flyJinnah, ...passengerData);
