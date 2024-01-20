'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // function to order starter and main course:
  order: function (starterIndex, mainIndex) {
    // return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]);
  },
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
};

// looping through object entries
for (const [day, { open, close }] of Object.entries(restaurant.openingHours)) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}

// destructuring array:
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);
// to grab 1st and third element we just leave the hole for the second element to be skipped
let [first1, , third] = restaurant.categories;
console.log(first1, third);

// destructuring helps to swap the variable values easily:
let firstName = 'Alex';
let lastName = 'Ozhoh';
console.log(firstName, lastName); // Alex Ozhoh
[firstName, lastName] = [lastName, firstName];
console.log(firstName, lastName); // Ozhoh Alex

// order function will return an array and we will return multiple variables from a single function call
// const [starter, mainMeal] = restaurant.order(1, 0);
// console.log('My starter is: ' + starter);
// console.log('My main course is: ' + mainMeal);

// nested array
const nested = [1, 2, 3, [4, 5, 6]];
const [element1, , , [nested1, nested2, nested3]] = nested;
console.log(element1);
console.log(nested1);
console.log(nested2);
console.log(nested3);

// destructuring an object by using the exact property names from the object
const { name, mainMenu } = restaurant;
console.log(name);
console.log(mainMenu);
// destructuring an object and changing property names
const { name: restaurantName, mainMenu: mainMenuFromRestaraunt } = restaurant;
console.log(restaurantName);
console.log(mainMenuFromRestaraunt);
// setting default values for the variable while destructuring objects:
const { menu = [], mainMenu: mainRestorantMenu = [] } = restaurant; // in case any of the properties does not exist you will get the variable with default value

// reasigning variables during destructuring
let a = 10;
let b = 20;
const obj = { a: 1, b: 2 };
({ a, b } = obj); // have to wrap destructuring into parantethis due to a JS syntax errors otherwise

// destructuring nested objects:
const {
  openingHours: {
    fri: { open },
  },
} = restaurant;
console.log(open);

// spread operator ( takes all elements from array but does not creates new variables)
const array = [3, 4, 5];
console.log(array);
const newCombinedArray = [1, 2, ...array];
console.log(newCombinedArray);
const newNestedArray = [1, 2, array];
console.log(newNestedArray);
// create a   SHALLOW copy of an array:
const arrayCopy = [...array];
// merge 2 arrays togather:
const mergedArray = [...array, ...newCombinedArray];
console.log(mergedArray);

// rest operator (  will collect the rest of the elements into a new array )
const [firstElement, secondElement, ...otherElements] = [
  ...array,
  ...newCombinedArray,
];
// while destructuring an array we assigned 2 elements to a variable and
// collected all the rest of the elemnts into a new otherElements array
console.log(firstElement);
console.log(secondElement);
console.log(otherElements);
// rest operator with objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
//rest parameters:
function sum(...parameters) {
  let sum = 0;
  for (let i = 0; i < parameters.length; i++) {
    sum += parameters[i];
  }
  console.log(sum);
}
sum(1, 2, 3, 4, 5, 6, 7); // will compress all the parameters into an array

// OR and AND operators
//Will return the ferst truthy value or the last falsy in case there is no truthy value found
// OR operator will 'short circuit' once truthy value is found
console.log(3 || 'Alex'); //3
console.log(0 || 'Alex'); // Alex
console.log(true || ''); // true
console.log(undefined || null); // null
// setting default value trick with || operator:
let str = '';
const message = str || 'Oh, hi there!'; // message will be 'Oh, hi there!' since the first value is falsy
// nullish coalessing operator will work as OR but it will short circuit and return 0 and '' values as well
const number = 0;
const catchTheNumberIfItHasValue = number ?? 10; // usefull to not loose 0 or empty string values

// AND ( and operator works the opposite it will shourt circuit imediatly once found falsy value )
console.log(3 && 'Alex'); //Alex
console.log(0 && 'Alex'); // 0
console.log(true && ''); // ""
console.log(undefined && null); // undefined
// setting if condition with && opperator
const myOrder = [1, 1];
myOrder && restaurant.order(...myOrder);

// if number of guests are not specified set the default numbe
// if owners name displayed mask it
const rest1 = {
  name: 'Alice&Friends',
  numberOfGuests: 20,
};
const rest2 = {
  name: 'Spirit Elefant',
  owner: 'Antonio Gonzalez',
};

// setting default number of guest in case there is none specifyed
// rest1.numberOfGuests = rest1.numberOfGuests || 10;
// rest2.numberOfGuests = rest2.numberOfGuests || 10;
// OR assignment opperator
rest1.numberOfGuests ||= 10;
rest2.numberOfGuests ||= 10;

// anonymousing the owner name if its displayed
rest1.owner &&= 'anonymous';
rest2.owner &&= 'anonymous';

console.log(rest1);
console.log(rest2);

// For loop
const fullMenu = [...restaurant.starterMenu, restaurant.mainMenu];
// for of loop
for (const item of fullMenu) {
  console.log(item);
}
// for of loop with idexes of each item
for (const item of fullMenu.entries()) {
  console.log(item);
}
// for of loop with idexes of each item + destructuring for an easy use
for (const [index, item] of fullMenu.entries()) {
  console.log(index, item);
}

// optional chaining
// since there is no mon property it will break the chain and return undefined
const openHours = restaurant.openingHours.mon?.open;
console.log(openHours);

const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
for (const day of days) {
  console.log(
    restaurant.openingHours[day]?.open ?? `Restarant is closed on ${day}`
  );
}

console.log(days[1]?.[0]);

// looping over object property names
for (const property of Object.keys(restaurant)) {
  console.log(property);
}

// STRINGS
const word = 'Banana';

// print string letters
console.log(word[0]);

// length of a string
console.log(word.length);

// index of a character
console.log(word.indexOf('a'));
console.log(word.indexOf('ana'));
console.log(word.lastIndexOf('a'));

// substrings
console.log(word.slice(2));
console.log(word.slice(-2)); // negative index will count for the begining of the string

const string = 'I like JS , JS is an awesome language';
console.log(string.replaceAll('JS', 'Java'));

const myName = 'oleksandr ozhoh';

const capitalizeName = function (nameString) {
  const nameArr = nameString.split(' ');
  for (let i = 0; i < nameArr.length; i++) {
    nameArr[i] =
      nameArr[i].slice(0, 1).toUpperCase() + nameArr[i].slice(1).toLowerCase();
  }
  const nameStr = nameArr.join(' ');
  return nameStr;
};

console.log(capitalizeName(myName));

// will add characters at the beginning of the string to match the specified length
console.log(word.padStart(20, 'xolol'));

const maskCreditCardNumber = function (cardNumber) {
  return cardNumber.slice(-4).padStart(cardNumber.length, 'X');
};

console.log(maskCreditCardNumber(`1234567891234567`));

// repeat method
const message2 = 'This is my message';
console.log(message2.repeat(10));
