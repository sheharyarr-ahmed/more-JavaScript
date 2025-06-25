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
// OR OPERATOR LOOKS FOR THE TURTHY VALUE
// what really is happening in this is that truthy values are being logged whereas falsy values are not being logged
console.log(3 || "shery");
console.log(0 || "revo");

console.log(undefined || "shery"); //here undefined is an falsy value

// the use of ternary operator
// const invitations = 10;
// const guests = invitations < 9 ? invitations : "zero";
// console.log(guests);

// here you can see the practical example of the use of short circuitng in which restaurants.invitation does not exist so it was an falsy value thereforeit then check the other value which was truthy vlaue and return that value
// restaurant.invitations = 12;
restaurant.invitations = 0; // zero is an falsy value, therefore it will display the truthy value that is no invitations found
const guests = restaurant.invitations || "no invitations found";
console.log(guests);

const petShop = restaurant.dogs ? "found" : "not found";
console.log(petShop);

// AND OPERATOR LOOKS FOR THE falsy vlaue and if no falsy value found then it will return the last truthy value
const cars = restaurant.cars && "hello";
console.log(cars);

console.log(false && false && 0);

// the concept of nullish operator
const animals = 0;
const petsShop = animals ?? "no animals found";
console.log(petsShop);
