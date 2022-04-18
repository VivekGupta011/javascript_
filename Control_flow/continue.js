// continue statement is used to skip the current iteration of the loop
// program to calculate positive number only
// if the user enters a negative number that number is skipped from calculation
// negative number -> loop terminate 
// non-numeric character ->skip iteration
const prompt=require('prompt-sync')();
let sum=0;
let number=parseInt(prompt("Enter a number:"));

while(number>=0){
   
    sum+=number;
    number=parseInt(prompt("Enter a number:"));
  
    //continue condition
    if(isNaN(number)){
        console.log("You entered a string.");
        number=0;
        continue;
    }
 
}
console.log(`The sum of all positive number:${sum}`);