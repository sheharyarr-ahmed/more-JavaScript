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
  createPasta: function (ing1, ing2, ing3) {
    return console.log(
      `your pasta is made up of these ingredients ${ing1}, ${ing2}, ${ing3}`
    );
  },
};

// what spread operator do is that it takes out all the elements form one array and place it to another array
const newMenu = [1, 2, 3, ...restaurant.mainMenu];
console.log(newMenu);

// in this way we can go through all the elements of an array without looping through all the elements of array
console.log(...restaurant.mainMenu);

// making a shallow copy
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

// unpacking elements of an array separeted by commas the use of spread operators on the following iterables ands psread operaotor cannot be used in template strings
// String, arrays, maps, sets but not objects

let shery = "sheharyar";
console.log(...shery);

// the use of spread operators in the functions first define function
// const ingredients = [
//   prompt("write the name of the ingridient"),
//   prompt("write he name of the second ingredient"),
//   prompt("write the name of the third ingredient"),
// ];

// restaurant.createPasta(...ingredients);

// spread operator in objects and it also shows that it does not mutate the orignal one
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "White",
};

const grande = { price: 20, ...car, owner: "sheharyar" };
console.log(grande);
console.log(car);
