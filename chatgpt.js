// // Sum of Array:
// // Write a function that takes an array of numbers as input and returns the sum of all the numbers.


// // function sumArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log("Sum is " + sum) // Prints: 44

// // }
// // Creating array
let arr = [4, 8, 7, 13, 12]

// // // Creating variable to store the sum
// // let sum = 0;

// // // Running the for loop
// // for (let i = 0; i < arr.length; i++) {
// // 	sum += arr[i];
// // }

// // console.log("Sum is " + sum) // Prints: 44


// Q  finding the maximum value =================
function findMax(arr) {
    // Your code here
}


function findMax(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return undefined; // or any other value you prefer for an empty array
    }

    // Initialize max with the first element of the array
    let max = arr[0];

    // Iterate through the array to find the maximum value
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

//  using the spread method==============

function findMax(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return undefined; // or any other value you prefer for an empty array
    }

    // Use Math.max with the spread operator to find the maximum value
    return Math.max(...arr);
}


console.log(findMax(arr))

//  # finding the valuye of average of an array - by using the call  back function


function calculateAverage(arr) {
    return arr.reduce((accumulator, currentValue) => (b!=a ? b : a ), 0);
}

console.log(calculateAverage(arr));

// function removeDuplicates(arr) {
//     const redup = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// }


// return arr.reduce((acc, cur) => (cur > 0 ? acc + cur : acc), 0);