//owerCase().split(" ");
STRING MANIPULATION FUNCTION

// 1.Reverse a String: Write a function that reverses a given string.
function reverseString(str) {}

// 2.Count Characters: Create a function that counts the number of characters in a string.
var str = " Hello, world! ";

console.log(str.trim().length);

// 3. Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function titleCase(str) {
  var splitStr = str.toL
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr.length[i] < splitStr.length) {
      splitStr[i].charAt(0).toUpperCase();
    }

    str = splitStr.join(" ");
  }

  return str;
}

//ARRAY FUNCTIONS:

// 1. Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function getMin(arr, n) {
  let res = arr[0];

  for (let i = 1; i < n; i++) res = Math.min(res, arr[i]);

  return res;
}

function getMax(arr, n) {
  let res = arr[0];

  for (let i = 1; i < n; i++) res = Math.max(res, arr[i]);

  return res;
}

// 2. Sum of Array: Create a function that calculates the sum of all elements in an array.
const arr = [23, 34, 77, 99, 324];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

// 3. Filter Array: Implement a function that filters out elements from an array based on a given condition.

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);

//  Mathematical Functions:

// 1. Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else if (n > 1) {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  } else {
    return "number has to be positive.";
  }
}

// 2. Prime Number Check: Create a function to check if a number is prime or not.

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
  console.log("1 is neither prime nor composite number.");
}

// 3. Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

let fn1 = 0,
  fn2 = 1,
  nextFibonacci;

console.log("Fibonacci Series upto 8 terms is:");

for (let i = 1; i <= 8; i++) {
  console.log(fn1);
  nextFibonacci = fn1 + fn2;
  fn1 = fn2;
  fn2 = nextFibonacci;
}
