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

// console.dir(booker);

// more examples

let f;
const g = function () {
  const a = 2;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

let h;
const t = function () {
  const l = 4;
  h = function () {
    console.log(l * 3);
  };
};

t();
h();

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    // this timeout function take two parameters first the function which we want to trigger after the timer, second parameter is the time which is in mili seconds there fore 1 sec = 1000ms
    console.log(`we are now boarding ${n} passengers.`);
    console.log(`there are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} seconds`);
};

boardPassengers(120, 2);

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
