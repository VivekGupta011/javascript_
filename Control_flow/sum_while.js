// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum
const prompt=require('prompt-sync')();
let sum=0;
// take input from user
let number=parseInt(prompt('Enter a number:'));
while(number>=0){
    //add all positive numbers
    sum+=number;

    //take input again if the number is positive
    number=parseInt(prompt("Enter a nUmber:"));
}
//display the sum
console.log(`The sum is ${sum}.`);
