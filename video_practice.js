//  for in loop =======> it gives the value of key-value pair
let obj ={
    harry:90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
}

for (let a in obj) {
    // console.log(a)
    console.log("marks of " + a + " are " + obj[a])
    
}
for (let b of obj) {
    console.log(b)
    // console.log("marks of " + b + " are " + obj[b])
    
}

// # TypeError: obj is not iterable >>  for of loop

// # for of loop > it works on object should be iterable, it will not give object value
for (let b of "harry") {
    console.log(b)
    // console.log("marks of " + b + " are " + obj[b])
    
}


// =====--------------------while loop----------------

    let n = prompt("Enter the value of n");
    n = Number.parseInt(n)

    let i = 0;
    while (i<n){
        console.log(i)
        i++

    }
// if i++ is removed or comments then while loop continually keep running. Consequently, it will crash the browser or computer.
// Be cautious when WHILE loop is used especially i++ should be active
// first condition checks then block executes and vice-versa of do-while loop

let n = prompt("Enter the value of n");
// let n=5
n = Number.parseInt(n)

let i = 0;
do{
    console.log(i)
    i++

}while (i<n)

// ============================*******************====================

// find difference between above and below example

let n = prompt("Enter the value of n");
// let n=5
n = Number.parseInt(n)

let i = 10;
do{
    console.log(i)
    i++

}while (i<n)

// first block executes then condition checks and vice-versa of while loop
// do while loop > runs atleast once


// functions > do seprates the codes and helps in repeatative tasks.

function onePlusAvg(x,y){
    returns 1 + (x+y)/2
}

let a=1;
let b=2;
let c=3;

console.log("one plus avg of a and b is ", onePlusAvg(a,b))
console.log("one plus avg of b and c is ", onePlusAvg(c,b))
console.log("one plus avg of a and c is ", onePlusAvg(a,c))

// ==========================================

function onePlusAvg(x,y){
    return Math.round(1 + (x+y)/2)
}

let a=1;
let b=2;
let c=3;
console.log(onePlusAvg(a,b));
console.log(onePlusAvg(c,b));
console.log(onePlusAvg(a,c));
// console.log("one plus avg of a and b is ", onePlusAvg(a,b))
// console.log("one plus avg of b and c is ", onePlusAvg(c,b))
// console.log("one plus avg of a and c is ", onePlusAvg(a,c))

//===================================

const sum = (p,q)=>{
    return p+q
}
console.log(sum(9,7));

// latest method of using the function

// const hello =()=>{
//     console.log("hey i am fine")
// }
const hello =()=>{
    console.log("hey i am fine")
    return "hi"
}

let v = hello();

// =====================================

const hello =()=>{
    console.log("hey i am fine")
    return "hi"
}

let v = hello();
console.log(v)

// ============================


// Create a function that takes voltage and current and returns the calculated power.

// Examples

// circuitPower(230, 10) ➞ 2300


// let a = prompt("Enter Voltage Value");
// let b = prompt("Enter Current Value");
let a = 9;
let b = 4;
let a = prompt("Enter an integer:");
while (a === null || !Number.isInteger(parseInt(a)));

// Now, userInput contains a valid integer
console.log("You entered voltage : " + parseInt(a));
let b = prompt("Enter an integer:");
 while (b === null || !Number.isInteger(parseInt(a)));


// Now, userInput contains a valid integer
console.log("You entered current : " + parseInt(b));

function powCal(a,b){
    const voltCurr = a*b
    return "circuitPower(a,b) = " + voltCurr + " Watts."
}
console.log(powCal(a,b));

function fits(x, y) {
    if (Number.isInteger(y / x)) {
      return 'Fits!';
    }
    return 'Does NOT fit!';
  }
  
  console.log(fits(5, 10));
  // Expected output: "Fits!"
  
  console.log(fits(5, 11));
  // Expected output: "Does NOT fit!"

  let userInput;

do {
    userInput = prompt("Enter an integer:");
} while (userInput === null || !Number.isInteger(parseInt(userInput)));

// Now, userInput contains a valid integer
console.log("You entered: " + parseInt(userInput));


// ================Array===============


let xs = [1,3,4,5,6,75,4,3,5,6,6,664,34,3,"not present",null,];
for ( i = 0; i < xs.length; i++) { 
    console.log(xs[i]);
 }

xs.forEach((x, i) => console.log(x));

for (const x of xs) { console.log(x); }

 xs[6] = 97;
 console.log(xs);
 console.log(xs.length);
 console.log(typeof xs[14]);
 console.log(typeof xs[15]);
 console.log(typeof xs[16]);
 console.log(typeof xs[18]);

const array = ["one", "two", "three"]
array.forEach(function (item, index) {
  console.log(item, index);
});

