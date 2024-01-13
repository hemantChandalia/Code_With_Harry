
// Exercise 1 - Guess the number =========================================
do {
    // guessNum = prompt("guess a random number !");
    guessNum = 99
    guessNum = Number.parseInt(guessNum);
    if(guessNum<50){
        console.log(`guessed value should be greater than ${guessNum}`);

    }else if (guessNum>51 && guessNum<98){
        console.log(`guessed value should be greater than ${guessNum}` );

    }else if(guessNum>=100){
        console.log("guessed value should be less than 100")

    }else if(guessNum==100){
        console.log(`guessed value should be less than ${guessNum}`);
    }
    else{
        // console.log("")
    }
} while (guessNum !==99);
console.log(guessNum);
console.log("you guessed the correct value !");


// how harry did this exercise 1 =============================