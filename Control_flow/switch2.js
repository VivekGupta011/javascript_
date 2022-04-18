const prompt=require('prompt-sync')();
let result=0;

//take the operator input
const operator=prompt("Enter operator (either +,-,* or /):");

// ${} is a placeholder that is used in template literals
// you can use any validation javascript expression such as variable,arithmetic operation,function call and other inside ${}


//take the operand input
const number1=parseInt(prompt("Enter first number:"));
const number2=parseInt(prompt("Enter second number:"));

switch(operator){
    case "+":
        result=number1+number2;
        console.log(`${number1} + ${number2}=${result}`);
        break;
    case "-":
        result=number1-number2;
        console.log(`${number1} -${number2}=${result}`);
        break;
    case "*":
        result=number1*number2;
        console.log(`${number1}*${number2}=${result}`);
    case "/":
        result=number1/number2;
        console.log(`${number1}/${number2}=${result}`);
    default:
        console.log("Invalid operator");
        break;
}   