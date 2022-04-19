// a variavle declared at the top of the program or outside of afunction is considered a global scope variable

// program to print a text
let a="hello";
function greet(){
    console.log(a);
}
greet();

// program to show the change in gloabal variable
let a2="hello1";
function greet1(){
    a1=3;
    console.log(a2);
}
//before the function call
console.log(a2);

//after the function call
greet1();
console.log(a1);