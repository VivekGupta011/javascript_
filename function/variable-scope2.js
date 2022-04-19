//global variable can be access from inside of inner function
// but we can't access inner function variable outside of function

let a="hello";
function greet(){
    let b="world";
    console.log(a+b);

}
greet();
console.log(a+b);