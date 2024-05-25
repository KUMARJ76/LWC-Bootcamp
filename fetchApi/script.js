function calculateSum(arr) {
  debugger;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [2, 5, 8, 4, 8, 9, 0];
const total = calculateSum(numbers);
console.log("Total:", total);
