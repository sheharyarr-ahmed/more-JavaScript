"use strict";

const myName = "I am Sheharyar";
const fName = "Memon";

// working with the arrays and some of its methods
console.log(myName.indexOf("S"));
console.log(myName.lastIndexOf("h")); //for starting from the last//
console.log(myName[2]);
console.log(myName.slice(0, 4));
console.log(myName.slice(-2));

console.log(myName.slice(0, myName.indexOf(" ")));

// making an samll function
function formatUserInfo(fullName, cardNo) {
  const upperCase = fullName.toUpperCase();
  const fourDigits = cardNo.slice(-4);
  const hidden = "*".repeat(12) + fourDigits;

  console.log(
    `${upperCase} and Card No is ${fourDigits} and full card number ${hidden}`
  );
}

formatUserInfo("Sheharyar Ahmed", "887766");

// some other methods of Strings
// includes;
// trim;
// replace;
// toUpperCase;
// toLowerCase;

const checkValidComment = function (comment) {
  const regularComment = comment.toLowerCase().trim();
  if (regularComment.includes("please") && regularComment.startsWith("hello")) {
    console.log("this is an valid comment");
  } else {
    console.log("this is not an valid comment");
  }
};

checkValidComment("i am please");

// some new more methods
const senEx = "hello+look+at+me";
const sentence = "hello iam iPhone";
console.log(sentence.split(" ")); //what it does it looks for the word from which it will divide and place them into an array //
console.log(senEx.split("+"));

const naam = "Sheharyar Ahmed";
const [firstName, lastName] = naam.split(" ");
console.log(firstName);

const wildAnimals = "tiger+lion+cheetah";
const arrayWildAnimals = wildAnimals.split("+");
console.log(arrayWildAnimals);
const joinedAnimals = arrayWildAnimals.join("+");
console.log(joinedAnimals);

const [make, model] = "Toyota Corolla".split(" ");
const newVariant = [
  "Introducing".toUpperCase(),
  make,
  model.toUpperCase(),
].join(" ");
console.log(newVariant);

// function to make names capitalise
const nameCapitalise = function (name) {
  const names = name.toLowerCase().split(" ");
  const rightNames = [];

  for (const n of names) {
    rightNames.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(rightNames.join(" "));
};

nameCapitalise("saif khan");
// nameCapitalise("saif HSBF");
