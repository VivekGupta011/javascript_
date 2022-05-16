//computed.property.keys=>with the help of we can reasign the new "key value"
// example
// const keyname='name';
// const data={
//     [keyname]:'vivek',
//     lastname:'gupta'
// }
// console.log(data);

// console.log("this is property call in object",data.name )

// method defination shorthand
const data1={
    buyy:()=>{
       console.log("this is normal object");
    },
    // same thing we can represent using method shorhand
    buy(){
        console.log("this is 'method defination shorthand' ")
    }
    
}
console.log("data1.buy()",data1.buy());
console.log("data1.buyy()",data1.buyy());