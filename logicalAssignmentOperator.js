"use strict";
const showroom = {
  name: "toyoyta-hyderabad-motors",
  owner: "sheharyar",
};

const showroom2 = {
  name: "hona-point-motors",
  salesManager: "mohsin",
  capacity: 200,
};

// showroom.owner = showroom.owner || "no owner";
// showroom2.owner = showroom2.owner || "sheharyar";
// OR ASSIGNMENT OPERATOR
showroom.capacity ||= 200; //more consise way of writing the above commented statement, this is telling that if showroom contains owner that return the owner's value otherwise inseet a new property capacity and its value as 200
showroom2.capacity ||= 150;
// school.console.log(showroom);
// console.log(showroom2);

// now what if capacity is 0 as zeri is an falsy value
// in that case we will use nullish assignment operator ??=
const school = {
  sheharyar: "student",
  hamza: "student",
  noOfStudents: 0,
};

// school.noOfStudents = school.noOfStudents || 10;
school.noOfStudents ??= 10; // the use of nullsih operator
console.log(school);

// the use of and assingment operator &&=

const class1 = {
  std1: 12,
  std2: 4,
};

const class2 = {
  std1: 34,
  std4: 3,
};
// what and assignment operaotor does is that if we want to assign an new vlaue to an existing property than there we can use and assignment operaotr
class2.std4 &&= 32;
console.log(class2);
