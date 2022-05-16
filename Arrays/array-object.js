const actors=[
    {
        name:'vivek',
        payment:100
    },
    {
        name:'gupta',
        payment:200
    },
    {
        name:'arya',
        payment:300
    },
    function(){
        console.log("this is function testing")
    }
]
const result=actors[0].payment;
const resu=actors[1].name;
const resul=actors[3];
console.log("this is function inside arrays ",resul);
console.log(resu);
console.log(result);

for(i=0;i<actors.length;i++){
    actors[i].payment=actors[i].payment-10;
    console.log(actors[i]);
}