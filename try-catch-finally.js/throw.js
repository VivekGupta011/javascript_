// the try and catch statement handle exceptions in a standard way which is provided by javascript
// however,you can use the throw statement to pass user-defined exceptions

const number=58;
try{
    if(number>60){
        console.log('success');
    }
    else{
        //user-defined throw statement
        throw new Error('The number is low');
    }
    //if throw executes the below code does not execute
    console.log('hello');
}
catch(error){
    console.log('An error caught');
    console.log('Error message:'+error);
}