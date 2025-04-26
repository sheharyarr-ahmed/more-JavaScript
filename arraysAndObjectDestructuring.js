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

  orderDelivery: function ({
    //this is example of nested objects destructuirng and howit can used in an function which have multiple parameters.
    //a function in which i am passing an object as an arguemnt and that object should contain these keys because we will be selecting them through deconstructing and then through deconstructing we will select those properties of the object and then they will be extracted as variabels when fucntion is invoked
    main,
    starter,
    address,
    starterIndex,
    mainIndex,
  }) {
    console.log(
      `your order of ${main} and ${starter} has been received and will be delivered to ${address} and for further taste you can add ${restaurant.starterMenu[starterIndex]} or ${restaurant.mainMenu[mainIndex]}`
    );
  },
};

restaurant.orderDelivery({
  //this fucntion is for the concept of nested arrays destructuring and is used for invoking property orderDelivery of restaurant object before invoking and understanding this read this function's definition para first above in the restaurant object
  main: "karahi",
  starter: "mozarella-sticks",
  address: "gari khata",
  starterIndex: 2,
  mainIndex: 2,
});

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

// nested arrays
const nestedArray = [1, 2, 3, [3, 2, 1]];
// const [h, , l, o] = nestedArray; // the missing place between commas tells that we are ignoring the element present on index 1
// console.log(h);

// now what we want is that we want to assign separate variables to each element including the elements of that nested array as well this is called destructuring inside destructuring
const [q, , w, [e, r, t]] = nestedArray;
console.log(q, w, e, r, t);

// we can set default values as well to the variables while destructirng array it can help when we declare more number of variables than the number of elements of an array
// for example
const arrX = [2, 3, 4];
// const [j, k, l, m] = arrX;
// console.log(j, k, l, m); //the output is 2 3 4 undefined this undefined shows the value of m variable so in order to stay away from this undefined we set deafult values to the variables like this in this way the value of m will become 1 while other variables do have correspondig elements in the arrX so they will not be assigned these default values except m
const [j = 1, k = 1, l = 1, m = 1] = arrX;
console.log(j, k, l, m);

// now its time to learn that how do we destructure the objects into separate objects
// what we have to do first is that first create an object of those properties of objects whom we want to assign separate variables of the object then make another object and then assign the names of those  separate variables
const { name, categories, openingHours } = restaurant; //selecting the properties of the object restaurant which will become our separate variabels to destruct
const {
  //assinging names to those variables
  name: restaurantName,
  categories: categoriesType,
  openingHours: hours,
} = restaurant;

console.log(restaurantName, hours, categoriesType);

// seting default values to the properties if they do not exist
// what we doing in the next line first we add/select the property which does no exist in the restaurant object so we set an default value to it if in case it is called sometimes so as an output the default will be displayed and for the other property location we first select the property location then rename it to cityLocation all in one line and then also assign it with an default value
const { reviews = [], location: cityLocation = [] } = restaurant;
console.log(reviews, cityLocation);

// here we see the concept of mutating variables of the object so what we did first we cretae existing new h,v variables then after this an object named as obj67 created which have same properties h and v which were the name of our variables and then we mutate(changing the values of the variables) the variables without again declaring them so for that
let h = 1277;
let n = 65;
const obj67 = {
  h: "hiroshima",
  n: "nagasaki",
};
// we have to enclose them into parenthesis
({ h, n } = obj67);
console.log(h, n);

// destructuring nested objects
// what really is happening here is that we first select an property openingHours which was renamed to hours on object restaurant then what we did this hours property itself is an object inside whose property fri is again is an object which has properties open close so what we did we select property fri of object hours then select property open and close of fri and renamed those properties to o and c
// console.log(hours);
// const { //first we select and now to destrtuct more meaning to destruct fri property we add :{} after firday and inside we mention the properties of fri obj
//   fri: { open, close },
// } = hours;
const {
  fri: { open: o, close: c }, //renaming the property names open to o and close to c
} = hours;

console.log(o, c);
