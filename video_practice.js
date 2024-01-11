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