const prompt=require('prompt-sync')();
// break with for loop

for(let i=1;i<=5;i++){
    if(i==4){
        console.log("break the loop");
        break
    }
    console.log(i);
}

// if the user enters a negative numbers break ends the loop
let sum=0,number;
while(true){
    //take input again if the number is positive
    number=parseInt(prompt('Enter a number:'));

    //break condition
    if(number<0){
        break;
    }
    sum+=number;
}
//display the sum
console.log(`The sum is ${sum}.`);