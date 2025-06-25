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

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
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
  },
};

// console.log(restaurant.openingHours.mon.open);

// in order to prevent his error we use optional chaining because it will prevent the error which we are not sure about for eg in this situation that in an resataurant does its openingHours contains monday or does it opens on monday and the output shows an error

// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant.openingHours?.thu?.open);

// real life example fo rthe optional chaining
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open;
//   console.log(`On ${day}, we open at ${open}`);
// }
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open || "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// we used nullish colescing operator because the sat openingHours contained the open hour as 0 which was falsy value so it gave the closed so therefore we used nullish co scaling which consider undefined or null as falsy value
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// we can alos use optional chaining for methods that they do exist or not

// we can also use optional chaining for arrays as well, the exampme is below

const cars = ["corolla", "vitz", "ferrari", { firstName: "sarrinah" }];

console.log(cars[3]?.firstName ?? "no first name found");
