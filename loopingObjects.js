"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};
// presenting the array of the keys/properties of the object openingHours
const properties = Object.keys(openingHours);
console.log(properties);
console.log(`we are open on ${properties.length} days`);
// now looping them, printing them one by one with the help of for of loop
for (const keys of properties) {
  console.log(keys);
}

let final = `we are open on ${properties.length} days: `;
for (const daYs of properties) {
  final += `${daYs}, `;
}
console.log(final);

// now displaying for the values in an array of the object openingHours
const arrayOfValues = Object.values(openingHours);
console.log(arrayOfValues);
// looping those values, displaying them one by one
const valuesOpeningHours = Object.values(openingHours);
for (const loopValues of valuesOpeningHours) {
  console.log(loopValues);
}

// entries mean it contains index, key and value both
// now displaying for the entries in an array of the object openingHours
const entriesOpeningHours = Object.entries(openingHours);
console.log(entriesOpeningHours);
// looping those entries, displaying them one by one
for (const loopEntries of entriesOpeningHours) {
  console.log(loopEntries);
}

// we can also destructure the entries/object like this by saying keys it will display keys and and then we further the value's object which contains the open and close values
for (const [key, { open, close }] of entriesOpeningHours) {
  console.log(`we open on ${key} at ${open} and close at ${close}`);
}
