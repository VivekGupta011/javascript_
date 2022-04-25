//1. Recursion is a process of calling itself.A function that calls itself is called a recursive function
// 2.'recurse()' function is a recursive function .it is calling itself inside the function
// 3.a recursive function must have a condition to stop calling itself.otherise the function is called indefinitely
// 4.once the condition is met,the function stops calling itself. "this is called a base condition"
// 5.to prevent infinite recursion you can use if..else statement where one branch makes the recursive call and the other doesn't


// working of recursive function 
// function recurse(){
    //function code 
    // recurse();
    //function code

// }
// recurse();

// print numbers
// Q1.program to count the down numbers to 1
function countdown(number){
    //display the number
    console.log(number);

    // decrease the number value
    const newnumber=number-1;

    //base case
    if(newnumber>0){
        countdown(newnumber);
    }
}
countdown(4);