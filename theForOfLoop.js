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
// an abstraction way of the traditioanl methods of the loop without an counter do the iteration of the elements inside of an array
const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(allMenu);

// for (const carte of allMenu) {
//   console.log(carte);
// }

// for (const carte of allMenu.entries()) {
//   console.log(carte);
// }

// now what we did is that we said that inside the carte array on its 0 index add 1 and on its second 1 index display it as it is

for (const carte of allMenu.entries()) {
  console.log(`${carte[0] + 1} : ${carte[1]}`);
}

// to see the index
// console.log([...allMenu.entries()]);

// another way of dislaying the index and he carte name inside of an array is this
for (const [no, itemName] of allMenu.entries()) {
  console.log(`${no + 1} : ${itemName}`);
}
