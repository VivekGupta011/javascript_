function login(username,password){
console.log(`Your name is ${username} and your password is ${password}`);
console.log(password);
<<<<<<< HEAD
console.log(username);   
console.log(username.toUpperCase());  //hello vivek this is git testing
=======
console.log(username);
console.log(username.toUpperCase());
>>>>>>> 55d80faba8c06d72e6ecf228c4eff53e1f932728
return password.toUpperCase();


}
login('vivek','password');

// we can access parameter through calling function like 'console.log()'

function calculate_area(width,height){
    const area1=width*height;
    return area1;
    

}
calculate_area(34,35);
