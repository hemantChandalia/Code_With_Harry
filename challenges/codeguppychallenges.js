// codeguppy 50 challenges===========================
// Print numbers from 1 to 10===============

function numPrint(){
    for (let i = 1; i<=10; i++){
        console.log(i);
    }
}

console.log(numPrint());

for (let i = 1; i<=10; i++){
    console.log(i);
}

// Print the odd numbers less than 100===============



for(let i=1; i<100; i++){
    if (i%2 !=0){
        console.log(i)
    }

}

// Print the multiplication table with 7================

// by recursive method =====>>>>
function print_table(n, i = 1) {
	if (i == 11) // Base case
		return;
	console.log(n + " * " + i + " = " + n * i);
	i++; // Increment i
	print_table(n, i);
}

// Driver Code
let n = 5;
print_table(n);

// by for loop[ method=====>>>>>>

let n=7;
for (let i = 1; i<=10; i++)
    console.log(`${n} * ${i} = ${n*i}`)

// Calculate the sum of numbers from 1 to 10

// simple method==========>>>>>>>>

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("The sum of numbers from 1 to 10 is: " + sum);

// 

let sum = 0;
for (let i =12; i<30; i++){


    if(i%2==0){
        sum +=i;

    }
}
console.log(sum);

// Create a function that will convert from Celsius to Fahrenheit==========


function celcToFahr( n ) {
    return ((n * 9.0 / 5.0) + 32.0);
}
// let n = 20;

console.log(celcToFahr(20));


// Create a function that will convert from Fahrenheit to Celsius============
// C = (F − 32) × 5 ⁄ 9.

function fahToCel(n){
    return (n-32)*5/9;
}
console.log(fahToCel(90));


// Calculate the sum of numbers in an array of numbers

let arr = [1,43,5,6,34,235,6,7,5,4,3,2,4,6,7,9,7,5,4];
let sum =0;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        
    }


console.log(sum);


// Calculate the average of the numbers in an array of numbers

let arr = [1,43,5,6,34,235,6,7,5,4,3,2,4,6,7,9,7,5,4];

let sum = 0;
// let avg = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum/arr.length;
    
}
console.log(avg);

// Calculate the average of the numbers in an array of numbers

let arr = [1,43,5,6,34,235,6,7,5,4,3,2,4,6,7,9,7,5,4];
// const arr = [1, 2, 3, 4, 5];

let sum = 0;
// let avg = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum/arr.length;
    
}
console.log(avg);

// Find the maximum number in an array of numbers
let arr = [1,43,5,6,34,235,6,7,5,4,3,2,4,6,7,9,7,5,4];

// let max = Math.max(...arr);
console.log(Math.max(...arr));



// Create a function that will return a Boolean specifying if a number is prime


function checkNum(num){
    // Corner case 

if (num <=1){
    return false;
}
    // Check from 2 to n-1 

for (let i =2; i<num; i++){

 if (num%i==0) {
    return false;
 }
 
}

return true;
 
}

console.log(checkNum(23));

// Calculate the sum of digits of a positive integer number

let arr = [12, 34, -2, 24, -5, 42, 46, 35, 2, 56, 7, -65, 43];

function sumArrayNum() {
    let positiveSum = 0;
    let negativeSum = 0;

    for (let num of arr) {
        if (num > 0) {
            positiveSum += num;
        } else if (num < 0) {
            negativeSum += num;
        }
    }

    return {
        positive: positiveSum,
        negative: negativeSum
    };
}

let result = sumArrayNum();

console.log(result);
console.log(result.positive);
console.log(result.negative);
//   other methods also===================



 // Calculate the sum of digits of a positive integer number

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function findPrimesGreaterThanN(p, n) {
    const primes = [];
    let currentNumber = n + 1; // Start checking from the next number after n
  
    while (primes.length < p) {
      if (isPrime(currentNumber)) {
        primes.push(currentNumber);
      }
      currentNumber++;
    }
  
    return primes;
  }
  
  // Example usage:
  const numberOfPrimes = 5;
  const startingNumber = 1;
  const result = findPrimesGreaterThanN(numberOfPrimes, startingNumber);
  console.log(result);
  