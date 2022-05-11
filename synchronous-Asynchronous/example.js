function Newuser(callback){
    setTimeout(function(){
        console.log("sign in/sign up");
        callback();
    },2000)
}

function pastUser(){
    setTimeout(function(){
        console.log("Already have account!")

    },2000);
}
function mail(){
    setTimeout(function(){
        console.log("Send mail")

    },3000);
}
function project(){
    setTimeout(function(){
        console.log("Tell me about your project!")

    },4000);
}
function discuss(){
    setTimeout(function(){
        console.log("Already have account!")

    },5000);
}


// function call
// when we take any function as a parameter then those fuction called "callback function"
Newuser(function(){
pastUser();
mail();
project();
discuss();

});

console.log("our website working!")

