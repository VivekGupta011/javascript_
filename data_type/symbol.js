//two symbols with the same description
const value1=Symbol('hello');
const value2=Symbol('hello');

console.log(value1===value2);

// creating symbol
const x=Symbol()
typeof x; //symbol

//you can pass an  optional string as its description
const x1=Symbol('hey');
console.log(x1); //symbol(hey)

// Access Symbol Description
const x3=Symbol('hey');
console.log(x3.description);

// Add Symbol as an object key
// you can use symbols as a key in object using square bracket []
let id =Symbol("id");
let person={
    namee:"vivek",
    //adding symbol as a key
    [id]:123
};
console.log(person);



