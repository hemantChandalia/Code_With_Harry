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


// ========================================================

// Array Methods ==============================================

let num = [1,2,3,4,5,6,7,]
let b = num.toString();
console.log(b, typeof b);

let c = num.join(" and ");
console.log(c, typeof c);

num.pop();
console.log(num);

let r = num.pop()
console.log(num, r);


// Array reduce method=============================================

let arr3 = [1,2,3,5,2,1];
// let newarr3 = arr3.reduce((h1,h2) =>{
//     return  h1 + h2
// })
// console.log(newarr3)

// ==================
const reduce_func= (h1,h2) =>{
    return  h1 + h2
}
// function can be pass as variable

let newarr3 = arr3.reduce(reduce_func) 

console.log(newarr3);

//  filter method ======================================
const words = ['hemant','arun', 'akash','encourage','friendship','salvation'];

const result = words.filter((words) => words.length>=6);
console.log(result);

let a = [50,28,90,80,55,21,23,65,30,20];
let z = a.filter((x) => {
    return x%10
});
// only true value we finds 
// it does not change our original array

console.log(z)

// ind difference in return value

let a = [50,28,90,80,55,21,23,65,30,20];
let z = a.filter((x) => {
    return x%10 == 0
});
// only true value we finds 
// it does not change our original array

console.log(z)

// array Map Method=================================

let arr = [45,23,21]

arr.map ((value)=>{
    console.log(value)
    return value 
})
let a = arr.map ((value)=>{
  console.log(value)
    return value + 1
})
console.log(a)

let a = arr.map ((value,index,array )=>{
    console.log(value,index,array)
    return value + index
})
console.log(a);

// learning the concept of time and timeEnd- video no.- 25

console.time("forLoop")
for (let i =0; i<5;i++){
    console.log(233)

}
console.timeEnd("forLoop")

console.time("whileLoop")
let i = 0;
while (i<5) {
    i++
    console.log(233)
}

console.timeEnd("whileLoop")

let a = prompt("enter a anything");
// document.write(a);
a = Number.parseInt(a);


// using the conirm dialog  to write in js- video no.27
let write = confirm("do you want to write it to the page");
if (write){
    document.write(a)
}else{
    document.write("please allow me to write")
}



  

