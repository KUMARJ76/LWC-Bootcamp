// setTimeout(() => {
//   console.log("Hi");
// }, 5000);

let intervalCount = 0;
let timeoutCount = 0;

// let intervalDetail = "";
// intervalDetail = setInterval(() => {
//   console.log("Hello");
// }, 6000);
// setTimeout(() => {
//   clearInterval(intervalDetail);
// }, 16000);

function intervalFunction() {
  intervalCount++;
  console.log(`interval tick: ${intervalCount}`);
  if (intervalCount === 5) {
    clearInterval(intervalId);
  }
}

function timeoutFunction() {
  timeoutCount++;
  console.log(`timeout tick: ${timeoutCount}`);
  if (timeoutCount === 3) {
    clearTimeout(timeoutId);
  }
}

const intervalId = setInterval(intervalFunction, 1000);
const timeoutId = setTimeout(timeoutFunction, 500);
console.log("Start");
