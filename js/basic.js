// write the program to find even number 
const prompt = require("prompt-sync")();
let num=prompt("enter your number");
if(num%2==0){
    console.log("the given number is even");
}
else{
    console.log("the given number id odd")
}