// var is 'function scoped' variable declaration type in javscript
// let is 'block scoped' variable declaration type in javascript


//reason why let const even we have var =>because whenever we declare any value in bloack scope then we can access out side of access
const prompt=require('prompt-sync')();

let num=parseInt(prompt("Enter your current age:"));
if(num>18){
    console.log("you are eligible for voting!");
    var sum=true;
}else{
    console.log("you are not eligible for voting!");
}

console.log(sum);

// var is function scoped when we use inside of function
// we can't access any var value outside of function that's reason we call 'function scope'
function login(){
    var sum1=4;
}
console.log("sum1",sum1);