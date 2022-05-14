function login(username,password){
console.log(`Your name is ${username} and your password is ${password}`);
console.log(password);
console.log(username);
console.log(username.toUpperCase());
return password.toUpperCase();


}
login('vivek','password');

// we can access parameter through calling function like 'console.log()'

function calculate_area(width,height){
    const area1=width*height;
    return area1;
    

}
calculate_area(34,35);
