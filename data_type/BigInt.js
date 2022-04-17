
//in javascript Number type can only represent numbers less than (2^53 -1) and more than -(2^53-1). 
//bigInt value
const value1=999086656586798677n;

// Adding two big integers
const result1=value1 +1n;
console.log(result1);

//Error! BitInt and number cannot be added
const result2=value1+1;
console.log(result2);