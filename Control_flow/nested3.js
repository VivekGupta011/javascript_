// multiple case switch program
const prompt=require('prompt-sync')();
let fruit=String(prompt("Enter any fruits name:"));
switch(fruit){
    case "apple":
    case 'mango':
    case 'pinepple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not  a fruit.`);
        break;
}