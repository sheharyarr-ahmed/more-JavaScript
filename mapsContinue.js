"use strict";
// new way of making maps with the method or arrays in an array

const showroomCar = new Map([
  ["toyota", "corolla"],
  ["honda", "civic"],
  ["audi", "r8"],
  [true, "yes available"],
  [false, "not available"],
]);

console.log(showroomCar);

// the above method of making a map resembles with the way ob object.entries method
// converson of object into an map

const objectTrip = {
  k2: "audi",
  highway: "civic",
  lahore: "corolla",
};

console.log(Object.entries(objectTrip));

const tripMap = new Map(Object.entries(objectTrip));
console.log(tripMap);
