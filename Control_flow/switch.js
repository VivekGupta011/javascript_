// basically switch statement is used in decision making
//program using switch statement
const prompt=require('prompt-sync')();
let number=parseInt(prompt("Enter a number:"));
switch(number){
    case "1":
        number=1;
        break;
    case "2":
        number=2;
        break;
    case "3":
        number=3;
        break;
    default:
        number+"not found";
        break;
}
console.log(`The value is ${number}`);