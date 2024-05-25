console.log("hello");

let detail = {
  name: "Jeetesh",
  age: 26,
  skill: ["Apex", "LWC", "Admin", "JS"],
};
console.log(detail);
console.log(JSON.parse(JSON.stringify(detail)));
console.log(typeof detail);
console.log(typeof JSON.stringify(detail));
console.log(typeof JSON.parse(JSON.stringify(detail)));
detail.dob = "31/03/1998";
console.log(detail);
detail.age = 2024 - 1994;
console.log(detail);
/*[]--< whenever we have to populate property dynamically
/we can populate the key of object with space between the key name but it cannot be 
achieved by . operator */
country = "Country";
detail[country] = "India";
console.log(detail);
//detail.city Name='Pune';
detail["City Name"] = "Pune";
console.log(detail);

// Access the values from the object by . notaion and []

let myCountry = detail.Country;
console.log(myCountry);

let myCity = detail["City Name"];
console.log(myCity);

//?. Spread Operator

let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];
let combinedArray = [...arrayOne, ...arrayTwo];
console.log(combinedArray);

//1. Expand the string

let myName = "My name is Jeetesh";
console.log(...myName);

// 2. Add element to Array

arrayOne = [...arrayOne, 34, 65, 78];
console.log(arrayOne);
arrayOne = [-2, -1, 0, ...arrayOne, 68, 98, 12];
console.log(arrayOne);

// 3. Adding the object

let obj1 = { fname: "Jeet", lname: "Kumar" };
let obj2 = { skill: ["JS", "Apex", "LWC"], country: "India" };
console.log({ ...obj1, ...obj2 });

//4. Copy an array and an Object
// Array
let myFavFruit = ["Apple", "Grapes"];
let myFavFruitCopy = myFavFruit; // Deep Copy
myFavFruitCopy.push("Cherry");
console.log(myFavFruit);
console.log(myFavFruitCopy);

let myFavFruitCopySpread = [...myFavFruit]; //Shallow Copy
myFavFruitCopySpread.push("Mango");
console.log(myFavFruit);
console.log(myFavFruitCopySpread);

// Object

let myDetail = { fname: "Ankit", lname: "Jain" };
let myDetailCopyDeep = myDetail; // Deep copy
myDetailCopyDeep.age = 56;
console.log(myDetailCopyDeep);
console.log(myDetail);

let myDetailCopyShallow = { ...myDetail };
myDetailCopyShallow.country = "India";
console.log(myDetail);
console.log(myDetailCopyShallow); // deep copy

//  DESTRUCTURING ASSIGNMENT
//Array
let favFruit = ["Apple", "Grapes", "Guava", "Cherry"];
let [fruit1, fruit2, fruit3] = favFruit;
console.log(fruit1, fruit2, fruit3);
console.log(fruit1, fruit3);
console.log(fruit1, " ", fruit3);
let [fav1, ...rest] = favFruit;
console.log(fav1, rest);

//Object

let mydetail = {
  bname: "LWC",
  xname: "Apex",
  age: 1985,
};

let { bname, age } = mydetail;
let { bname: FNAME, age: DAY } = mydetail;
console.log(bname, age);
console.log(FNAME, DAY);
console.log(mydetail);

// STRING INTERPOLATION

let myString1 = " My Name is ";
let myString2 = " Jeet ";
let myString3 = " I Stay in";
let myString4 = " Pune ";
let myString5 = "Thank you";

let finalString = `My Name is ${myString2}. I Sta'y in ${myString4} and "Thankyou"`;
console.log(finalString);
