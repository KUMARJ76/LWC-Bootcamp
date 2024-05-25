let text = "starting";
console.log(text);
console.log(text.slice(2, 6));
console.log(text.slice(4));
console.log(text.substring(2, 6));
console.log(text.substr(2, 5));

//replace

console.log(text.replace("t", "y"));

//trim trimStart() trimEnd()
let mytext = "  Hello ";
console.log(mytext.trim());
console.log(mytext.trimStart());
console.log(mytext.trimEnd());

// padStart padEnd

let num = "5";
console.log(num.padEnd(4, "*"));
console.log(num.padStart(5, "*"));

//Split method (string to array)
let arry = text.split("");
console.log(arry);

//convert array to string using toString() and join()
// join() seperated by a seperator
// toString() seperated by a ,

console.log(arry.toString());
console.log(arry.join(""));

// search the string
//  Includes - return true or false
//  Indexof - return  the position of the index or -1

console.log(text.indexOf("t"));
console.log(text.indexOf("z"));
console.log(text.includes("z"));
console.log(text.includes("s"));
let final = [];
arry.map((curr) => {
  if (!final.includes(curr)) {
    final = [...final, curr];
  }
});
console.log(final.join(""));
console.log(text);

// Map is not the best method for this purpose

//    ARRAY

let arr = ["ankit", "Jain", "Jain", "Jeet", "Kunal"];
// 1. Push - add element at the end return length of the array and it is mutating the original array
console.log(arr.push("test"));
console.log(arr);
// 2.unshift - add element at the begining return length of the array and it is mutating the original array
console.log(arr.unshift("Jeetu"));
console.log(arr);

//3. pop() remove the element from the end of the array and return the removed element and it is mutating original array
console.log(arr.pop());
console.log(arr);
// 4. shift() remove the element from the begining  of the array and return the removed element and it is mutating original array
console.log(arr.shift());
console.log(arr);

// modify the array
arr[2] = "Tester";
console.log(arr);

let mySet = new Set(arr);
console.log(mySet);

// search the array
// Includes

console.log(arr.includes("Jain"));

//indexOf
console.log(arr.indexOf("Jain"));
console.log(arr.indexOf("Jan"));

/* Splice method
 splice(param1,param2,rest)
 param1:- position where new elements will be added
 param2:-how many elements need to be removed
 rest:-new elements you have to add
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// add 2 fruits
fruits.splice(2, 0, "Guava", "Lemon");
console.log(fruits);
//removed 2  fruits from the array
let removedElement = fruits.splice(2, 2, "Kiwi", "Grapes");
console.log(removedElement);
console.log(fruits);

/* Slice method
 slice(param1,param2)
 param1:- postion of the start index(eg :2)
 param2: postion of the last index+1   (eg: 5 +1)
 slice(2,5+1)
*/

const slicedArray = fruits.slice(2, 5 + 1);
console.log(slicedArray);
console.log(fruits);

// ForEach method
/* forEach((currItem,index,originalArray)=>{
})*/

const banking = [5000, -7000, 2000, -4000, 8000];
/*banking.forEach((currItem, index, array) => {
  console.log(currItem);
  console.log(banking[index]);
  console.log(array);
})*/

let forEachArray = banking.forEach((item) => {
  item = item / 10;
  console.log(item);
});
console.log(forEachArray); // undefined because for each doesnot return array

//Map method

let mapArray = banking.map((item) => {
  return (item = item / 10);
});
console.log(mapArray);

/* filter method */

let dpositAmount = banking.filter((item) => {
  return item > 0;
});
console.log(dpositAmount);
let withdrawAmount = banking.filter((item) => {
  return item < 0;
});
console.log(withdrawAmount);

let favFruits = ["Banana", "Orange", "Apple", "Mango"];
//give the fruits for which the fruit name is greater than 5 character

let filteredFruits = favFruits.filter((item) => {
  return item.length > 5;
});
console.log(filteredFruits);

//find method:=== always return one entry/item

let entryFor = banking.find((item) => {
  return item === 5000;
});
console.log(entryFor);
console.log(banking);
