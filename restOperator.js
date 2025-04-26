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

// rest operator also has same syntax as spread operator but it is applied on LHS of = sign
// this is rest operator whats happening is that we first write the array that is on right then we write the variable arrays on the left then in that arrays we put ...rest which represents assign values from RHS array to firstname and gari varibales that are present on the LHS then for the rest elements present for which variables are not present make array of those elements
const [firstName, gari, ...restOperator] = ["shery", "car", "money"];
console.log(firstName, gari, restOperator);

// saved starting two items into item1 and item 2 while rest of the others into array of name unUsed

const [item1, item2, ...unUsed] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(item1, item2, unUsed);

const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);
