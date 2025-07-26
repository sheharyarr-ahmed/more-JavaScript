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

// BINDING METHOD

const bookFlyJinnah = book.bind(flyJinnah);
bookFlyJinnah(222, "hira");

// now we set an pre-set value
const preSetFJ = book.bind(flyJinnah, 223);
preSetFJ("yaqoob");

// now with event listeners
flyJinnah.planes = 300;
// console.log(flyJinnah);
flyJinnah.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", flyJinnah.buyPlane.bind(flyJinnah));

//   now again function calling the function exmaple for the bind method and discussion about the partial application which means to pre set the values

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const VAT = addTax.bind(null, 2); //here we did the partial application/ pre setvalues the null means the bind is assigned is with nothing whereas the 2 is the first parameter whose value is preset and that us rate
console.log(VAT(300));

// second example of this same process of bind method

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const rateProvided = addTaxRate(2);
rateProvided(300);
console.log(rateProvided(300));
