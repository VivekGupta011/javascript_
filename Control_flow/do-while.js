// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

const prompt=require('prompt-sync')();
let sum = 0;
let number = 0;
let num=parseInt(prompt("Enter how many number you want enter: "));
for(i=0;i<=num;i++){
    do{
        sum+=number;
        number=parseInt(prompt("Enter a number:"));
       
    
    }while(number>=0)
    console.log(`The sum is ${sum}`);
    


}



