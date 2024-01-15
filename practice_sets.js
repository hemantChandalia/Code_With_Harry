// ===========practice set 1========================

// chapter1


// Q1

let a = "harry";
let b = 58;

console.log(a+b);

// Q2

console.log(typeof a);
console.log(typeof b);
console.log(typeof a+b);

// Q3

const cd = "harry and aryan";
// let cd = "hemant";  
// SyntaxError: Identifier 'cd' has already been declared
console.log(cd);

// another example

const a = {
    name : "hemant",
    section : 12,
    isPrincipal: false
}
// in console >  SyntaxError: Identifier 'a' has already been declare

const d = {
    name : "hemant",
    section : 12,
    isPrincipal: false
}



// console.log(typeof d);  > object

// Q4 * important

d['friend'] = "akash";
d['name'] = "ankit";
d['section'] = 5;
console.log(d);

// console.log(d) > { name: 'ankit', section: 5, isPrincipal: false, friend: 'akash' }
// # we can edit the const key value pairs only, we can't store the string, number and even an object in const d,below is given

// d = 33; error  shown in console
// d{}; error shown in console

// Q5

const dic = {
    appreciate: "enjoy something or to understand the value of somebody/something",
    muster: "to gather, summon, rouse",
    aplomb: "imperturbable self-possession, poise, or assurance",
    largess: "generosity of spirit or attitude.",
    dernier_cri: "the latest fashion; last word."

}
console.log(dic.largess);   
// can access by this syntax
console.log(dic['largess']);
// can access by this syntax
console.log(dic);


// ===========practice set 2========================

// Q1=================

// ======================********************================
let age = prompt("what is your age ?");
age = Number.parseInt(age)
if (age>10 && age<20){
    console.log("your age lies b/w 10 and 20")
}
else{
    console.log("your age doesn't lies b/w 10 and 20")

}
// ======================********************================


// ReferenceError: prompt is not defined, if we are using prompt in node.js, it will run in browser.

// Q2=====================

let age = prompt("what is your age ?");
age = Number.parseInt(age)

switch(age){
    case 12:
        console.log("your age is 12")
        break
    case 13:
        console.log("your age is 13")
        break

    case 14:
        console.log("your age is 14")
        break

    case 15:
        console.log("your age is 15")
        break

    default:
        console.log("your age is not special")    
}


// Q3 ===================


let num = prompt("is it divisible by 2 and 3 ?");
// age = Number.parseInt(age)
num = Number.parseInt(num);

if (num%2==0 && num%3==0){
   console.log("your number divisible by 2 and 3")
 }
 else{
     console.log("your number doesn't divisible by b/w 2 and 3")

 } 


// Q4=============================


let num = prompt("is it divisible by either 2 or 3 ?");
// age = Number.parseInt(age)
num = Number.parseInt(num);

if (num%2==0 && num%3==0){
   console.log("your number divisible by 2 and 3")
 }
 else if(num%2==0){
                console.log("divisible by 2 only");
 }
 else if(num%3==0){
                console.log("divisible by 3 only");
 }
 else{
     console.log("your number doesn't divisible by b/w 2 and 3")

 } 

//  divisible by either (2 or 3), and (2 and 3)

// Q5=============================

let age = prompt("age ?");
let age = 26;

age = Number.parseInt(age)
let condition = age > 18 ? "you can drive" : "you can't drive"
console.log(condition);


let num = prompt("guess correct value !");
// let num = prompt("guess correct value !");
// let num = 39
num = Number.parseInt(num);


// for (let i = 0; i < num; i++) {
if (num == 39 ){
   console.log("Congrutulations !!! you got the correct value " )
 }
 
else if(num<=30){
    console.log("number should be in-between 31 and 40s. Keep trying...")
} 
else if(num>=40 && num<=55){
    console.log("number should be less than 40");
}
 
 else{
     console.log("Try Again ! Better luck next time... ")

 }

 // ===========practice set 3==============================


 // Q1
let marks = {
    harry : 90,
    shubham : 34,
    rahul : 23,
    monika : 4
}
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
    
}

 // Q2
 let marks1 = {
    harry : 90,
    shubham : 34,
    rahul : 23,
    monika : 4
}

for (let keys in marks1) {
    console.log("The marks of " + keys + " are " + marks1[keys])
    
}

// Q3
 let cn = 43
 cn =Number.parseInt(cn);
 let i 
 while (i != cn){
     console.log("keep try...")
     i = prompt("enter a correct number");
     
 }
 console.log("you entered a correct number");
 
 

 // Q4 
const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5
}
console.log(mean(4,4,5,6,7));


// ==============================================

// Question:-generat a counting numbers using for loop
for (let i=1; i<=10; i++){
    console.log(i)
    }
    
    
    for (let i=0; i<=10; i++){
    console.log(i+1)
    }
    
    

// =========================Question:- generat a sum of first n natural numbers===========

let sum = 0
let n = 4
// let n = prompt("enter the value o n");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
    sum += (i+1)
    console.log((i+1),"+")
    
}
console.log("sum of first " + n + " natural numbers is "  + sum);

//Question:- generat a multiplication table up to 10 for that number using a for loop.

let multipl = 1;

let n1 = 5;

for (let i = 1; i <= 10; i++) {
    multipl = (i*n1)
    console.log(i*n1,)
    
}
console.log("multiplication table of " + n1 + " is given above" );

// same result as given above

// let multipl = 1;

let n2 = 5;

for (let i = 1; i <= 10; i++) {
    // multipl = (i*n1)
    console.log(i*n2,)
    
}
console.log("multiplication table of " + n2 + " is given above" );

// anthor method =====================

// program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}


// Question:- Develop a program that prints a pattern using nested for loops. For example, print a pyramid of stars with a height of 5:


//  Height of the pyramid
const height = 5;

// Outer loop for the number of rows (height of the pyramid)
for (let i = 1; i <= height; i++) {
  let row = '';

  // Loop for adding spaces before the stars
  for (let j = 1; j <= height - i; j++) {
    row += ' ';
  }

  // Loop for adding stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += '*';
  }

  console.log(row);
}


// =====================================================

// let mins = 220;

function mins(){
    return 
}

console.log(mins.timeConvert(200));

// // ==========================================

// function onePlusAvg(x,y){
//     return Math.round(1 + (x+y)/2)
// }

// let a=1;
// let b=2;
// let c=3;
// console.log(onePlusAvg(a,b));


// //===================================

// const sum = (p,q)=>{
//     return p+q
// }
// console.log(sum(9,7));

// // ========================

// const hello =()=>{
//     console.log("hey i am fine")
//     return "hi"
// }

// let v = hello();

// // =====================================

// const hello =()=>{
//     console.log("hey i am fine")
//     return "hi"
// }

// let v = hello();
// console.log(v)\

// ==========================Edabit Challenges ===============

// function timeConvert(n) {
// var num = n;
// var hours = (num / 60);
// var rhours = Math.floor(hours);
// var minutes = (hours - rhours) * 60;
// var rminutes = Math.round(minutes);
// return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";}

// console.log(timeConvert(200));




// function minConvert(num){
   
//     var mins = (num*60)
//     var rmins = Math.round(mins)
   
//     return num + " minutes = " + rmins + " Total Seconds " ;

// }



// console.log(minConvert(200))
// function minConvert(num){
   
//     var mins = (num*60)
//     var rmins = Math.round(mins)
   
//     return num + " minutes = " + rmins + " Total Seconds " ;

// }

const x = "sides of tri"
const y = "sides of tri"
function arTri(x,y){
    var n = x,y
    var z = (x*y)/2
    return   x  + " , " +  y  + " are values of the triangle = " + z + " Area of Triangle"

}

console.log("Base: " + x);
console.log("Height: " + y);
console.log(arTri(10,10))
console.log(arTri(3,2))
console.log(arTri(7,4))



// ==============================Age to days================

// age = (years × 365) + (months × 31) + days

let a = "years";
let b = "months";
let c = "days";
function ageToDays(a,b,c){
    const yr = a*365
    const mth = b*31
    const dy = c*1
    const td = yr+mth+dy
    return " years days = " + yr + ", months days =  " + mth + ", remaining days = " + dy  +  ". Total Complete Days = " + td


}

console.log(ageToDays(30,8,23));

// ====================Practice Set 4=================

// Q1==================
let str = "harry\"";
console.log(str.length);

// Q2===============

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// includes searches and while searches it is case sensitives > lowercase and uppercase
 
let stra = "Welcome to GeeksforGeeks.";
let check = stra.includes("Geeks");
console.log(check);

let strg = "we are good friends and keep encouraging one another as usual";
let check1 = strg.includes("friends");
let word1 = 'good'
console.log(check1);
` the word "${word1}" ${strg.includes(word1) ? 'is' : 'is not'} in the sentence`

//  startWith is also case sensitiveness 

let check2 = strg.startsWith("we");
console.log(check2);

//  endsWith is also case sensitiveness 
let check3 = strg.endsWith("usual");
console.log(check3);


// Q3======================================
let strg2 = "WE ARE GOOD FRIENDS AND KEEP ENCOURAGING ONE ANOTHER AS USUAL"
console.log(strg.toUpperCase());
console.log(strg2.toLowerCase());


// Q4======================================

let extr = "we are good friends and keep encouraging one another as usual by Rs 100000";


let amount = extr;


// let amount = Number.parseInt(extr);

// difference after using the parseInt > it is then number
// when we dont use parseInt > then it is just a string
console.log(typeof amount);
console.log(typeof extr);
console.log(extr.length);
console.log(extr.substring(1,41))
// differnce between slice and substing
console.log(extr.slice(65))


// Q5======================================

extr[1] = "V"
console.log(extr)

// string are immutable and most importantly it does not show any error in console

// ====================Practice Set 5======================

// Q1=======================================

let arr = [1,2,3,4,5,6,7,83]
let a= prompt("enter a number");

a = Number.parseInt(a);
arr.push(a)
console.log(arr)

// check it on browser

// Q2=======================================
let arr = [1,2,3,4,5,6,7,83];
let a;

do {
    a=prompt("enter a number")
    a= Number.parseInt(a)
    arr.push(a)
    
} while (a !=0);
console.log(arr);

// Q3=======================================

let arr = [1,2,3,4,90,5,40,6,7,83,30,50,630];

let n1 = arr.filter((x) => {
    return x%10 == 0
})
console.log(n1);

// Q4=======================================

let arr = [1,2,3,4,90,5,40,6,7,83,30,50,630];
let n = arr.map((x) => {
    return x*x == 8100
})
console.log(n);

// Q5===========================================

let arr5 = [1,2,3,4,5];
// let arr5 = [1,2,3];
let v = arr.reduce((x1,x2) => {
    return x1*x1
    // return x1*x2*x1
})
console.log(v)



// Practice Set- 6==================================================

// Q1 ==================================================

let age = prompt("enter your age ")
age = Number.parseInt(age);
const canDrive = (age)=>{
    return age >=18 ? true:false
}


if (canDrive(age)) {
    alert("you can drive")
    
} else {
    alert("you cannot drive")
}
// how i did this===============
// Q1=============================

let age = prompt("Enter the age.");
age = Number.parseInt(age);

    if (age < 18 ) {
        alert(`you are a kid and you cannot drive because you are ${age} years old`)    
    }else {
        alert("you can drive because you are above 18 years old")
    }
let result

//  another method - by using the function

function testAge(a){
    if (a<=18){
        result = `you are a kid and you cannot drive because you are ${a} years old.`
    }else {
        result = `you can drive because you are above 18 years old and yours present age is ${a} years old.`
    }
    return result;
}

console.log(testAge(10));

// Q2 ==================================================


const canDrive = (age)=>{
    return age >=18 ? true:false
}
let runAgain = true;

while(runAgain){
    let age = prompt("enter your age ")
age = Number.parseInt(age);

if (canDrive(age)) {
    alert("you can drive")
    
} else {
    alert("you cannot drive")
}
runAgain = confirm("do you want to play again ?")
}

// Q3 ==================================================

const canDrive = (age)=>{
    return age >=18 ? true:false
}
let runAgain = true;

while(runAgain){
    let age = prompt("enter your age ")
age = Number.parseInt(age);
if (age<0){
    console.error("please enter a vaild age");
    break;
}

if (canDrive(age)) {
    alert("you can drive")
    
} else {
    alert("you cannot drive")
}
runAgain = confirm("do you want to play again ?")
}

// Q4 ==================================================

let num = prompt("enter a number")
num = Number.parseInt(num)

if (num>8){
    location.href = "google.co.in"
}

let color = prompt("type a color you wants")
document.body.style.background = color




