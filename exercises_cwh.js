
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

// =======================================================

// Exercise No.2 Snake,Water Game with the computer 

function snakeWaterGunGame(userChoice) {
    const choices = ["snake", "water", "gun"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log("Your choice: " + userChoice);
    console.log("Computer's choice: " + computerChoice);

    if (userChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (userChoice === "snake" && computerChoice === "water") ||
        (userChoice === "water" && computerChoice === "gun") ||
        (userChoice === "gun" && computerChoice === "snake")
    ) {
        alert("You win!");
    } else {
        alert("You lose!");
    }
}

// Example usage:
const userInput = prompt("Enter snake, water, or gun:").toLowerCase();
const userCnf = confirm(`Are you sure of choosing ${userInput} ? `);

snakeWaterGunGame(userInput);

