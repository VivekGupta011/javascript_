// Implicit conversion to number
let result;
result='3'-2;
console.log(result);//1

result="4"-3;
console.log(result);

// Non-numeric String Results to NaN
//non-numeric string used with -,*,/ result to NaN
result='hello'-"world";
console.log(result);//NaN

result='4'-"hello";
console.log(result);
