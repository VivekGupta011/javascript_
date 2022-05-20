//sum of two numbers
//declaring a function
const prompt=require('prompt-sync')();  

function add(a,b){
    return a+b;
}

//take input from the user
let number1=parseFloat(prompt('Enter first number:'));
let number2=parseFloat(prompt('Enter second number:'));
let result=add(number1,number2);

//display the result
console.log("The sum is:"+result);