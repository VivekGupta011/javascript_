// javascript Explicit Conversion => this conversion done manually as per your need using built-in methods

let result;
//string to number
// to convert numeric string and boolean value to numbers you can use Number()
result=Number('324');
console.log(result); //324

result=Number('324e-1');
console.log(result);
result=Number('324e1');
console.log(result);

//boolean to number
result=Number(true);
console.log(result);//1

result=Number(false);
console.log(result);//0

// in javascript empty strings and null values return 0

result=Number(null);
console.log(result);//0

result=Number('');
console.log(result);//0

// if a string is an invalid number the result  will be NaN

let result1;
result1=Number('Hello');
console.log(result1);//NaN

result1=Number(undefined);
console.log(result1);

result1=Number(NaN);
console.log("NaN",result1);//NaN

