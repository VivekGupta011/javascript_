// Symbols are not included in for..in loop
let id=Symbol("id");
let person={
    namee:"Vivek",
    age:25,
    [id]:12
};
// using for ..in
for(let key in person){
    console.log(key);
}

let personn={
    namee1:"vivekk"
  
};
//creating symbol
let idd=Symbol("idd");
person[idd]=12;