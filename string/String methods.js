// javascript string methods
const text1='hello';
const text2='world';
const text3='     javascript    ';

//concatenating two strings 
const result=text1.concat(' ', text2);
console.log(result);

// converting the text to uppercase 
const result2=text1.toUpperCase();
console.log(result2);

//removing whitespace from the string 
const result3=text3.trim();
console.log(result3);

// converting the string to array
const result4=text1.split();
console.log(result4);

//slicing the string
const result5=text1.slice(1,3);
console.log(result5);

// javascript string() function => the string() is used to convert various data type to strings
const a=255;
const b=true;

//converting to string 
const result6=String(a);
const result7=String(b);

console.log(result6);
console.log(`${a}`,typeof a);
console.log(`${result6}`,typeof result6);

console.log(result7);
console.log(`${b}`,typeof b);
console.log(`${result7}`,typeof result7);

