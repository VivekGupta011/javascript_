let p=new Promise((resolve,reject)=>{
    let a=1+4
    if(a===2){
        resolve('success')
    }else{
        reject('failed')
    }
})

p.then((message)=>{
    console.log("this is in the then "+message)
}).catch((message)=>{
    console.log("this is in the catch "+message)
})

let q=new Promise((resolve,reject)=>{
    let a=3;
    if(a===3){
        resolve('successs')
    }else{
        reject('failed')
    }
})
q.then((message)=>{
    console.log("this is "+message);
}).catch((message)=>{
    console.log("this is in "+message)
})





let o=new Promise((resolve,reject)=>{
    var a=7;
    if(a===7){
        console.log("this is success message")
        resolve("task completed")
    }else{
        reject("task failed")
    }
})

o.then((messagge)=>{
    console.log("this is "+messagge)
}).catch((messagge)=>{
    console.log("this is "+messagge)
})