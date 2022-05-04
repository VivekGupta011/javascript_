// javascipt try....catch statement
// try{
//     //body of try
// }
// catch(error){

// }
// finally(){}


// note=>Throw, and Try...Catch...Finally
// The try statement defines a code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.





// displayed undeclared variable

const numerator=100
const denominator=7;
try{
    console.log(numerator/denominator);
    //forgot to define variable
    // console.log(a);
}
catch(error){
    console.log('an error caught');
    console.log('error message:'+error);

}
finally{
    console.log('finally will execute every time');
}