//note:Asynchronous javscript code allows the program to be executed immedialtely 
// where the synchronous code will block further execution of the remaining code until it finishes the current one 
// basically this is non-blocking code


console.log("hello vivek");
setTimeout(
    function(){
        console.log("hello this is Asynchronous Examole");

    },2000
);
console.log("this is last line of code!");