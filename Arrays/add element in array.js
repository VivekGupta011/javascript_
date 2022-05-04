// Add an element to an array
// you can use the built-in method 'push()' and 'unshift()' to array 

// push() method =>add an element at the end
let activities=['eat','play','sleep'];

console.log(activities);

activities.push('running');

console.log(activities);

// unshift() method =>adds an element at the beginning of the array
let activitiess=['eat','sleep'];
//add element at the start
activitiess.unshift('repeat');
console.log(activitiess);


//change element of an array
var dailyactivitiess=['eat','sleep'];
dailyactivitiess[2]='exercise';
console.log(dailyactivitiess);

// suppose an array has two element but trying to add fourth element then what will happen
var dailyactivities=['eat','sleep'];
dailyactivities[4]='exercise';
console.log(dailyactivities);

// remove element from array using pop() 'from last elment of array'

dailyactivities.pop();
console.log(dailyactivities);