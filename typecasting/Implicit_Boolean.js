// if Boolean is used true is 1,false is 0
let result;

result='4' - true;
console.log(result);//3

result=4 + false;
console.log(result);// 4

result=4+true;
console.log(result);

// null conversion to number
//null is 0 with used with Number
result=4+null;
console.log(result);//4

result=4-null;
console.log(result);//4


// undefined used with number ,boolean or null
// arithmatic operation of undefined with number ,boolean or null gives NaN

result=4+undefined;
console.log(result);

result=true+undefined;
console.log(result);

result=null+undefined;
console.log(result);//NaN

