// in javascript user can declare a variable using three keyword such var let and const
//Global scoped or function scoped:  'var' keyword is the global or function scope.that means variable can be accessed globally and variable defined inside a particular function can be accesses within the function 
// main motive to declare variable with var so that we can access them anywhere in the code
// users can declare the 2 variable inside with the same name using the var keyword and also user can ressign the value into the the variable 
var a=10;
function f(){
    var a1=5;
    console.log(a);
}
f();
console.log(a);
var a=14;
console.log(a);
// console.log(a1); this will genrate error
// let a=10;
// it is not allowed 
// let a=10;
// it is allowed 
// a=10;



function x(){
    var a=9;
    function y(){
        console.log(a);
    }
    return y;
}
var z=x();
console.log(z);