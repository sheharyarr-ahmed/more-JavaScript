"use strict";

const runOnce = function () {
  console.log("this will run once");
};

runOnce();

(function () {
  console.log("this will aso run once");
})(); //now this is an immeditely invoked functipn expression

//function expression: an function wiothout storing inside of an variable.

// for the arrow function
() => console.log("this will also run once");

{
  const isPrivate = 2234;
  var isNotPrivate = 125;
}

console.log(isNotPrivate); // this can be accessed because var and let creates its own scope
console.log(isPrivate); // this cannot be accessed because const is an intertnal scope in the block
