"use strict";
const mapsIntro = new Map();
// setting keys and values in the maps by using set method
mapsIntro.set("name", "shery");
mapsIntro.set("sex", "male");
mapsIntro.set("age", "22");
mapsIntro.set("football level", "pro");
console.log(mapsIntro.set("car", "corolla"));

// methods chaining here we just wrote the name of the map and then we just wrote set and chaining it
mapsIntro
  .set(1, "number one ranked university")
  .set(2, "learned in SZABIST")
  .set(true, "its true, we are open")
  .set("array1", [
    "apple",
    42,
    true,
    null,
    "banana",
    false,
    99,
    "grape",
    undefined,
    "car",
  ])
  .set(false, "its false, we are close 1")
  .set("open", 8)
  .set("close", 23);

// // other built in functions for maps in the java script
// mapsName.delete();
// mapsName.has();
// mapsName.size();

//retrieving the values from maps using get method
console.log(mapsIntro.get(1));
// console.log(mapsIntro.get(true));
console.log(mapsIntro.get("sex"));
console.log(mapsIntro.get("array1"));
// console.log(mapsIntro.get("false"));

// what it did is that first it checked the condition if that it gave true then the true was retuned from the map key
const time = 11;
console.log(
  mapsIntro.get(time > mapsIntro.get("open") && time < mapsIntro.get("close"))
);

// to check the availabilty of an key in an map returns an boolean value
console.log(mapsIntro.has("array1"));

console.log(mapsIntro.size);
console.log(mapsIntro);

// adding an object inside of an maps
const object1 = { firstName: "sheharyar" };
mapsIntro.set(object1, "yes we can place object as an key inside of an map");
console.log(mapsIntro);
// adding an array inside of an maps
const array3 = [1, 2, 3];
mapsIntro.set(array3, "yes we can add an array as an key inside of an map");

// now adding an dom element inside of an map

mapsIntro.set(
  document.querySelector("h1"),
  "selecting the heading element from the map"
);

console.log(mapsIntro.get(document.querySelector("h1")));
console.log(mapsIntro);

console.log(mapsIntro.size);

// challenge of MAPS
const cinemaHall = new Map();
cinemaHall
  .set("A1", true)
  .set("A2", false)
  .set("A3", true)
  .set("A4", false)
  .set("A5", false)
  .set("B1", false)
  .set("B2", true)
  .set("B3", false)
  .set("B4", false)
  .set("B5", false);

//   checking i fthe specific seat is available
if (cinemaHall.get("B3") === true) {
  console.log("this seat is occupied.");
} else {
  console.log("this seat is AVAILABLE");
}

// the number of seats available
let availableSeats = 0;
for (const [seats, available] of cinemaHall) {
  if (!available) {
    availableSeats++;
  }
}
console.log(`the available seats are ${availableSeats}`);

// the number of seats not available
for (const [seats, notAvailable] of cinemaHall) {
  if (notAvailable === true) {
    console.log(`the seat ${seats} is not available`);
  }
}
