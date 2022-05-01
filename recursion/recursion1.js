// generally recursion look like
// function recurse(){
//     if(condition){
//         recurse();
//     }else{
//         //stop calling recurse
//     }
// }
// recurse();

// program to count down numbers to 1
function countdown(number){
    //display the number
    console.log(number);

    //decrease the number value
    const newnumber=number-1;

    //base case
    if(newnumber>0){
        countdown(newnumber);

    }

}
countdown(6);


// find factorial of number
function factorial(x){

    // if number is 0
    if (x===0){
        return 1;
    }
    //if number is positive
    else{
        return x*factorial(x-1);
    }
}
const num=3;

//calling factorial() if num is non-negative
if(num>0){
    let result=factorial(num);
    console.log(`the factorial of ${num} is ${result}`);
}
