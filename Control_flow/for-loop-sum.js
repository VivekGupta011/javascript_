const prompt=require('prompt-sync')();

let sum=0;
const num=prompt("Enter a number");
for(let i=0;i<=num;i++){
    // console.log("Sum:",sum+=i);
    sum+=i;
    console.log(i);
}
console.log("sum:",sum);