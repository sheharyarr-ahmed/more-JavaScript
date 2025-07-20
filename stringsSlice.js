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
