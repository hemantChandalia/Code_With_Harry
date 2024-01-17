let words = ['snake','water','gun'];

function randomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];

}
for(let x=0; x<1; x++)
    result = randomWord(words);

    console.log(result);
 
    function checkResult(result){
        if ((result === "snake" && result === "water" || result !== "gun")) {
            console.log("snake won");

        }else {((result === "snake" && result === "gun" || result === "water")) 
            console.log("gun won");}
        }
       

    console.log(checkResult(result));