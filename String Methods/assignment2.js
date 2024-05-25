/*
Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World


Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"

Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }

Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ

Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]

Problem :
Write a function that takes an array of strings as input and returns a new array with only the strings that have a 
length greater than or equal to 5.

Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output: ["apple", "banana", "orange"]

Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
*/

/*Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World */

const capitalizeIstLetter = (input) =>
  input
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
console.log(capitalizeIstLetter("hello world"));

/*
Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"
*/

let reversedString = (input) => input.split("").reverse().join("");
console.log(reversedString("Hello World"));

/*
Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }
*/

let countCharOccurence = (input) => {
  let output = {};
  let arr = input.split("");
  for (let item of arr) {
    if (output.hasOwnProperty(item)) {
      output[item] = output[item] + 1;
    } else {
      output[item] = 1;
    }
  }
  console.log(output);
};
countCharOccurence("hello");

/*Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ*/

let displayUsername = (input) =>
  input
    .toUpperCase()
    .split(" ")
    .map((item) => item[0])
    .join("");
console.log(displayUsername("ankit Dilipji Jain"));

/*Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]*/

let evenArray = (input) => {
  for (let i of input) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
};
evenArray([1, 2, 3, 4, 5, 6]);
