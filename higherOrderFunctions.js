"use strict";
// the concept of higher order functions, call back functions
// with an practice question as well

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`before transformation: ${str}`);

  console.log(`after transformation: ${fn(str)}`);

  console.log(`this function is having ${fn.name} as an call back function`);
};

transformer("hello i am fly jinnah", oneWord);

transformer("hello i am fly jinnah", upperFirstWord);

const removeSpaces = function (str) {
  return `${str.trim().replace(/ /g, "-")}`;
};

const capitaliseMessage = function (str) {
  const capitalWords = [];
  const words = str.split(" ");
  console.log(words);
  for (const letter of words) {
    const capitaliseLetter = letter[0].toUpperCase() + letter.slice([1]);
    capitalWords.push(capitaliseLetter);
  }
  return `${capitalWords.join(" ")}`;
};

const processMessage = function (str, fn1, fn2) {
  console.log(`the message without spaces ${fn1(str)}`);
  console.log(`making words capitailse: ${fn2(str)}`);
};

processMessage("hello you are", removeSpaces, capitaliseMessage);
