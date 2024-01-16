// Q1 - Square Every Digit==================

// Given an integer, your task is to square every digit of it and concatenate them to produce a new integer.

const squareDigits = num => {
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  };
//  # imp notes :- Splitting the number allows us to use the map function to apply a function to all of these elements we just split. The function we choose is to square it. We join all these elements back together so that it is returned as a single string

  console.log(squareDigits(2112)); // 4114
  console.log(squareDigits(3212)); // 9414
  console.log(squareDigits(9159)); // 8112581

//   Q2 Square integer value ===============
// check it is a perfect square 


const isSquare = n => {
    return Math.sqrt(n)%1===0 ;
  };

//   % 1: The modulo operator (%) calculates the remainder when dividing the result of Math.sqrt(n) by 1.
// === 0: This checks if the remainder is equal to 0, indicating that the result of Math.sqrt(n) is a whole number.
  
  console.log(isSquare(0)); // true
  console.log(isSquare(4)); // true
  console.log(isSquare(25)); // true
  console.log(isSquare(3)); // false
  console.log(isSquare(93)); // false
  console.log(isSquare(-1)); // false


//   Highest and Lowest===============
// write a function that returns the highest and lowest numbers. There will always be at least one number in the input string.

  const highAndLow = numbers => {
    // Split the input string into an array of numbers
    const numArray = numbers.split(' ').map(Number);
  
    // Find the maximum and minimum values
    const maxNum = Math.max(...numArray);
    const minNum = Math.min(...numArray);
  
    // Return the result as a string
    return `${maxNum} ${minNum}`;
  };
  
//    #concise answer============

//   const highAndLow = numbers => {
//     const arr = numbers.split(' ');
//     return `${Math.max(...arr)} ${Math.min(...arr)}`;
//   };
  // Test cases
  console.log(highAndLow('1 2 3 4 5'));    // '5 1'
  console.log(highAndLow('1 2 -3 4 5'));   // '5 -3'
  console.log(highAndLow('1 9 3 4 -5'));   // '9 -5'
  console.log(highAndLow('0 -214 542'));   // '542 -214'
  


// Q Descending Order=====================
// Write a function that takes any non-negative integer as an argument and returns it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

const descendingOrder = n => {
    return parseInt(
      n
        .toString()
        .split('')
        .sort((a, b) => b - a)
        .join('')
    );
  };
  
//  concise answer
// function descendingOrder(n){
//     let newN =  n.toString().split('').sort(function(a,b){return b-a}).join('');
//     return parseInt(newN);
//   }
  
  console.log(descendingOrder(0)); // 0
  console.log(descendingOrder(1)); // 1
  console.log(descendingOrder(1021)); // 2110
  console.log(descendingOrder(42145)); // 54421
  console.log(descendingOrder(145263)); // 654321
  console.log(descendingOrder(123456789)); // 987654321

   
  // Mumbling===========================
// Given a string which includes only letters, write a function that produces the outputs below.



const accum = str => {
  return str.toString().split('').map((ele,index) => ele.toUpperCase() + ele.toLowerCase().repeat(index)).join('-');
};


// Stop gninnipS My sdroW!============
// reversing the alphabets characters

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces.

const spinWords = str => {
  return str
    .split(' ')
    .map(word => (word.length < 5 ? word : word.split('').reverse().join('')))
    .join(' ');
};

console.log(spinWords('This is a test')); // 'This is a test'
console.log(spinWords('Hey fellow warriors')); // 'Hey wollef sroirraw'
console.log(spinWords('This is another test')); // 'This is rehtona test'


// Shortest Word
// Given a non-empty string of words, return the length of the shortest word(s).



const findShort = str => {
  return Math.min(...str.split(' ').map(word => word.length));
};


console.log(findShort('Test where final word shortest see')); // 3
console.log(findShort('Lets all go on holiday somewhere very cold')); // 2
console.log(findShort('i want to travel the world writing code one day')); // 1



// Bit Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to 1 in the binary representation of that number. You can guarantee that input is non-negative. For example the binary representation of 1234 is 10011010010, so the function should return 5 in this case.



const countBits = n => {  
  return n.toString(2).split('1').length - 1;    
}



//  find the difference


const countBits = n => {
  if(n >= 0) {
    return n.toString(2).split('1').length - 1;
}
else {
    return (~n).toString(2).split('1').length - 1;
}
  
};



console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
console.log(countBits(9)); // 2
console.log(countBits(5)); // 2
console.log(countBits(1234)); // 5