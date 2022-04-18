// program to find the squre of number
const prompt=require('prompt-sync')();
function square1(a){
    return a*a;
}
let number=parseInt(prompt("Enter any number:"));
let result=square1(number);
console.log("The Square of number:"+result);

// alternate method
let x=function(num){return num*num};
console.log(x(4));

//can be used as variable value for other variable
let y=x(3);
console.log(y);