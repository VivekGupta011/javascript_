// in ceratin situations javascript automatically converts one data type to another(to the right type) .This is known as implicit conversion.

// numeric string used with + gives string type
let result;
result ='3'+2;
console.log(result); //"32"

result="3" + true;
console.log(result);//"3true"

result='3' +undefined;
console.log(result);

result ='3'+null;
console.log(result);
