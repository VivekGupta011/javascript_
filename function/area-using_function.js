function calculateArea(width,height){
    const area=width*height;
    return area;

}
const area=calculateArea(90,40);
console.log(area);

function multiply1(a,b){
     const multiplication=a*b;
     console.log(multiplication);
}
multiply1(3,5);


// declaration
function loginn(){
     
}

// Expression
const login=function(){
    console.log("Helo vivek");

}
login(); 


// callback
function callback(func){
    return typeof func=='function' ? func():console.log("you should enter function only!")
    console.log("this is callback function");
    func();

}
const num=0;


// callback(num);

callback(function func(){
    console.log("this is func() function");
});
