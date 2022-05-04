//you can use throw statement inside the catch block to rethrow an exception

const prompt=require('prompt-sync')();



const number=prompt('Enter any number')
try{
    //user-defined throw statement
    throw new Error('This is the throw');

}
catch(error){
    console.log('An error caught');
    if(number+8>10){
        //statement to handle exception
        console.log('Error message:'+error);
        console.log('Error resolved');
    }
    else{
        //cannot handle the exception
        //rethrown the exception 
        throw new Error('The value is low');

    }
}


