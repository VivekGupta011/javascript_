// // for ..in loop to iterate over string values
// const string='vivek   ';
// //using for..in loop
// for(let i in string){
//     let result="gupta " + string[i];

//     // display the properties
//     // console.log( ` ${result}`);
//     console.log(string);
// }


// for..in with arrays
const arr=['vivek',1,function func(){console.log("heloo vivek")}];
for(let i in arr){
    console.log(arr[i]);
    console.log("hello vivek");
}

// you should not used for..in to iterate over a array where the index order is important
