// javascript for ...in loop
// the for..in loops in javascript allows you to iterate over all property key of object
// note:once you get keys,you can easily find their corresponding vlue


// Example 1.
const student={
    name:'vivek',
    class:'tybscCS',
    age:12
}
//using for..in 
for (key in student){
    //display the properties
    console.log(`${key} => ${student[key]}`);
}

//the object key is assingned to the variable key.
// student[key] is used to access the value of key

// example2.
// update values properties
const salaries={
    vivek:4456,
    gupta:45646,
    rofhas:08644
}
//using for..in
for(let i in salaries){
    //add a currency synbol
    let salary="$" + salaries[i];

    // console.log(`${i}:${salaries[i]}`);
    // console.log("updated objected");
    

    //display the values
    console.log(`${i}:${salary}`);
}