"use strict";
// this file highlights the issue of passing by value(primitives) and pasing by reference(non primitives like arrays, objects and functions)
//  there is difference whem an string or an primitive value is passed in an function it remains same/ its just copied but when an object is passed in an function it alters the original state
const airline = "fly jinnah";
const shery = {
  name: "sheharyar ahmed",
  nationality: "pakistani",
};

const info = function (airline, quom) {
  airline = "air sial";
  quom.name = "as an" + quom.name;

  if (quom.nationality === "pakistani") {
    alert("checked in");
  } else {
    alert("invalid nationality");
  }
};
info(airline, shery);
console.log(airline);
console.log(shery);

// this function is an perfect exampple of difference between passing of primitives thorugh an functiona and passing of objects as an function

// airline remained same but the name inside the shery obejct got changed when the shery object passed thorugh the function
