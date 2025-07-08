"use strict";
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

// trying all the new methods of the set topics
// union
const unionSet = new Set(italianFoods.union(mexicanFoods));
console.log(unionSet);

// another way of union foods or combining elements of two sets together into an array

console.log([...italianFoods, ...mexicanFoods]);

// as this is an set so it may not duplicates the values inside set , now we will convert this set in to an array
console.log([...new Set(unionSet)]);

// intersection
const foodIntersection = new Set(mexicanFoods.intersection(italianFoods));
console.log(foodIntersection);
// conversion into an array
const intersectionArray = new Array(...foodIntersection); //or
// console.log(intersectionArray);
console.log([...new Set(foodIntersection)]);

// difference
const differenceSet = new Set(mexicanFoods.difference(italianFoods));
console.log(differenceSet);

// conversion into an array
console.log([...differenceSet]);

// and many also like symmetricDifference and isDisjoinOf
