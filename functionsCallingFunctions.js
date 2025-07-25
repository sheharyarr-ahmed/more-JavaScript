"use strict";
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};
// this is the to way to give the arguement to teh inside fucntion
const greetName = greet("hey");
greetName("sheharyar");

// another way of calling the outside and inside function
greet("hey")("ahsan");

// now trying with the arrow functions

const wish = (message) => (name) => console.log(`${message} ${name}`);

wish("happy birthday")("sheharyar");
