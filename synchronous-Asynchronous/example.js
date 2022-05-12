function register(callback){
    setTimeout(function(){
        console.log("this is register section");
        console.log("This is callback");
        callback();
    },2000)
}

function sendEmail(callback){
    setTimeout(function(){
        console.log("this is sendEmail section");
        console.log("this is callback2");
        callback();
    },3000)
}

function login(callback){
    setTimeout(function(){
        console.log("this is login section");
        console.log("this is callback3");
        callback();
        
    },4000)
}
function getUserData(callback){
    setTimeout(function(){
        console.log("this is getUserData section");
        console.log("this is callback4");
        callback();
    },4000)
}
function displayUserData(){
    setTimeout(function(){
        console.log("this is displayUserData section");
    },4000)
}

// callback here in form of nested function
register(function(){
sendEmail(function(){
login(function(){
getUserData(function(){
displayUserData();
});
});
});
});
