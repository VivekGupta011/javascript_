// you can access the character in a string  in two ways
// one way is to treat strings as an array,for example
const a='hello';
console.log(a[2]);

// another way is to used the method 'charAt()'
const a1='hello';
console.log(a.charAt(1));

//javascript string are immutable.that means the character of a string cannot be changed for example
let a2='hello V';
a[0]='H';
console.log(a2);

//however you can assign the variable name to new string for example
let a3='hello v3';
a3='Hello';
console.log(a3);

// javascript multiline strings

// using the + operator
const message1 = 'This is a long message ' +
    'that spans across multiple lines' + 
    'in the code.'

// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code.'

console.log(message1);
console.log(message2);