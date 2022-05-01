var a=7;

function x(){
    a=100;
    function y(){
        console.log(a);
    }
  
    return y;
 
}


var z=x();
console.log(z);
z();
console.log(a);
