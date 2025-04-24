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

  order: function (starterItem, mainItem) {
    return [restaurant.starterMenu[starterItem], restaurant.mainMenu[mainItem]];
  },
};

// destructuring of an array into single and separate variables
const arr = [1, 2, 34, 5]; //there are four elements inside of this array
const [x, y, z] = arr; //here i am unpacking three elements of array arr
console.log(x, y, z);

const [item1, item2, item3] = restaurant.categories;

console.log(item1, item2, item3);
console.log(item3);

//now what if i want to skip element on index 1 and index 2 from categorie array and then destruct the array categories, we'll do it in this way
let [ele0, , , ele3] = restaurant.categories;
console.log(ele0, ele3);

//const [ele0, , , ele3] so as this array will be represented in this manner but what if we want to switch the elements and for that we do this
[ele0, ele3] = [ele3, ele0];
console.log(ele0, ele3); // hence now they are switched

// created an function of named order inside restaurant method in which the functionality was user input the index numbers for starter and main menu and the those items will be taken as parameters
restaurant.order(3, 0);
console.log(restaurant.order(3, 0));

// here what we did is that we destruct the array in which the names of the item of starter and main is now assigned to separate variables
const [choosenStarter, choosenMain] = restaurant.order(3, 0);
console.log(choosenStarter, choosenMain);
