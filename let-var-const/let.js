// let keyword in javascript :the let keyword is an improved version of the varkeyword
// 


let a=10;
function f(){
    if(true){
        let b=9;

        //prints 9
        console.log(b);
    }
    // it give error as it 
    // defined in if block
    console.log(b);

}
f();