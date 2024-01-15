
// Exercise 1 - Guess the number =========================================
let guessNum
while (guessNum !==99){
    // guessNum = prompt("enter a random integer")
    guessNum = 95;
    guessNum = Number.parseInt(guessNum);

    if(guessNum<99){
        console.log(`guessed value should be greater than ${guessNum}`);
        // break;
    }else if (guessNum>=100){
        console.log(`guessed value should be less than 100` );
        // break;
    }else {
        console.log("you guessed the correct value !");
        break;
    }
}
console.log(guessNum);




// how harry did this exercise 1 =============================


