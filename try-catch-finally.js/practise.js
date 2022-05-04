const a=7, b='g';
const c=74;
let result1;

try{
     
    console.log(a/b);
    console.log(b);
    console.log(result1);
    console.log(result2);
}
catch(error){
    console.log("AN error caught");
    console.log('Error Message:'+error);
}
// try..catch won't catch exception if it happened in 'timed' code,like in "setTimeout()"
