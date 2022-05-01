// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("hii vivek");
// }
// x();


// this print value 6 five times because for all iteration allocate single memory space in global execution context
// function y(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("hello vivek");

// }
// y();


// this part print 1 2 3 4 5 because for each iteration allocate different space
function z(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    console.log("hello vivek");

}
z();