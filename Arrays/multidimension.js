// multidimension array is an array that contain another array
// create a multidimensional array
let students1=['hello',11];
let students2=['world',22];
let students3=['vivek',24];

//multidimension array
let studentData=[students1,students2,students3];
console.log(studentData[2][1]);

//adding an element to a outer array
studentData.push(['hey vivek',88]);
console.log(studentData);

//adding element to the inner array
//using index notation
studentData[1][2]='hello';
console.log(studentData);

studentData[2][1]='hello vivek';
console.log(studentData);

// using push()
studentData[2].push('vivekGupta');
console.log(studentData);
