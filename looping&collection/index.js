//LOOPS//

// ARRAY
let favfruits = ["Apple", "Grapes", "Guava", "Orange", "Grapes"];
for (let i = 0; i < favfruits.length; i++) {
  console.log(`${i + 1}: ${favfruits[i]}`);
}

//for of loop

for (let item of favfruits) {
  console.log("item", item); // get items only
}

for (let item of favfruits.entries()) {
  console.log(item); // get Index as well as Items
}

for (let [index, fruit] of favfruits.entries()) {
  console.log(`${index + 1}:${fruit}`);
}

// OBJECT

let myDetails = {
  fname: "Jeet",
  lname: "Kumar",
  age: 26,
};
/*
for (let item of myDetails) {
  console.log(`${item}`);  // not iterable
}
*/

// 1. Object.Keys

for (let i of Object.keys(myDetails)) {
  console.log(i);
  console.log("Jeet", myDetails[i]);
}

//2. Object.values
for (let i of Object.values(myDetails)) {
  console.log(i);
}

// 3. Object.entries();  --
for (let i of Object.entries(myDetails)) {
  console.log(i);
}

for (let [key, value] of Object.entries(myDetails)) {
  console.log(key, value);
}

// FOR IN LOOP

for (let i in favfruits) {
  console.log(i);
  console.log(favfruits[i]);
}

for (let item in myDetails) {
  console.log(item);
  console.log(myDetails[item]);
}

// complex example

let openingHours = {
  thur: { open: "10Am", close: "11PM" },
  fri: { open: "09Am", close: "10PM" },
  sat: { open: "08Am", close: "09PM" },
};
// by using for IN loop
for (let i in openingHours) {
  console.log(i);
  console.log(openingHours[i]);
  let { open, close } = openingHours[i];
  console.log(`on ${i} office starts ${open} at  and office close at ${close}`);
}

// by using for of loop

for (let i of Object.entries(openingHours)) {
  console.log(i);
}

for (let [day, hour] of Object.entries(openingHours)) {
  console.log(day, "test:", hour);
}

for (let [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`on ${day} office starts at ${open} and close at  ${close}`);
}

//COLLECTION

let myMap = new Map();
// to add the entries
myMap.set("1", "Ankit");
myMap.set(true, "trainer");
myMap.set(2, 50);
console.log(typeof myMap);

for (let [i, j] of myMap) {
  console.log(i, j);
}

let favPlace = new Map([
  ["Jaipur", "Palace"],
  ["Pune", "Fort"],
  ["Goa", "Beaches"],
]);
console.log(typeof favPlace);

for (let [i, j] of favPlace) {
  console.log(i, j);
}

// for (let i in favPlace) {
//   console.log(i);
// }

for (let i of favPlace.keys()) {
  console.log(i);
}

for (let i of favPlace.values()) {
  console.log(i);
}

for (let i of favPlace.entries()) {
  console.log(i);
}

//  SET COLLECTION

let mySet = new Set();
mySet.add("John");
mySet.add("John");
mySet.add("Ron");
mySet.add("Joe");
mySet.add("holmes");
console.log(mySet);

// check if the value is present in set or not using has method

console.log(mySet.has("Joe"));
console.log(mySet.has("Joe snow"));

let newSet = new Set(["Pune", "Hyderabad", "Banglore", "Chennai", "Pune"]);
console.log(newSet);

for (let i of newSet) {
  console.log(i);
}
