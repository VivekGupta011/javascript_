var b1=88;
let b2=88;
function x(){
    let a=6;
console.log("this ",a);
console.log("this b1",b1);
console.log("this b2",b2);

    function y(){
        var b=3;
        function z(){
            console.log(a,b);
            console.log("this b1",b1);
        }
console.log("this ",a);

        z();
    }
    y();
console.log("this ",a);


}
x();