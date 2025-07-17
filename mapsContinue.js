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

// an quiz app
const quizApp = new Map();
quizApp
  .set("Question", "What is the capital of Pkaistan")
  .set(1, "Karachi")
  .set(2, "Lahore")
  .set(3, "Islamabad")
  .set("correct", 3)
  .set(true, "your answer is correct")
  .set(false, "your answer is wrong");
console.log(quizApp.get("Question"));

for (const [key, value] of quizApp) {
  if (typeof key === "number") {
    console.log(`Please Choose: ${key}  ${value}`);
  }
}

// const answer = Number(prompt("Please enter your answer")); the real one used
const answer = 3;
console.log(answer);

console.log(quizApp.get(quizApp.get("correct") === answer));

// now the conversion of map into an array again

const arrayquizApp = [...quizApp];
console.log([...quizApp.keys()]);
console.log([...quizApp.values()]);
console.log(arrayquizApp);
