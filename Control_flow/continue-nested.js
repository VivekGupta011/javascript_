// nested for loops

//first loop for loop basically we use for making table 
for(let i=1;i<=5;i++){
    console.log("This is outer loop",i);
    //second loop for column
    for(let j=1;j<=5;j++){
        // console.log("This is inner loop");
        if(j==2){
            continue;
        }
        console.log(`i=${i},j=${j}`);
    }

}