//Q From 1 to 100, print "ping" if multiple of 3, "pong" if multiple of 5, or else print the number

function multiOfNum(num){
    // let check = [];
    for(let i=1; i<=num; i++){
        if(i%3===0){
            console.log("ping");
        }
        if (i%5===0){
            console.log("pong");
        }else{
            console.log(i);
        }
    }
    // return check;
}

console.log(multiOfNum(10));
// another way ======================================

function multiOfNum(num) {
    var result = [];
  
    for (var x = 1; x <= num; x++) {
      if (x % 3 == 0) {
        result.push("ping");
      }
      if (x % 5 == 0) {
        result.push("pong");
      }
      if (x % 3 != 0 && x % 5 != 0) {
        result.push(x);
      }
    }
  
    return result;
  }
  
  console.log(multiOfNum(10));

// Q  Fibonacci Numbers
function fibonacciOne(num){

    let result =[];
    let num1 =0;
    let num2 =1;
    let sum = 0;
    for (let i=1; i<=num; i++){

        sum = num1+num2;
        num1=num2;
        num2= sum;
        // result = sum;
        result.push(sum);

    }
    return result;
}
console.log(fibonacciOne(10))