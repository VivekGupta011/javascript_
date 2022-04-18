// a function is block of codes that perform a specific task
// suppose you need to create a program to create a circle and color it 
// you can create two functions to solve this program
// 1.a function to draw the circle
// 2.a function to color the circle


// Declaring a function 
// function nameof Function(){
    //function body 
// }
const prompt=require('prompt-sync')();


function great(name){
    console.log("Hello "+name+":)");


}
//variable name can be diffrent
let name=prompt("Enter your name:");

//callling function
great(name);