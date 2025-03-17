const p1 = new Promise((resolve , reject )=>{
    setTimeout(() => {
        // fetch data or talk to db 
        resolve() ;
    }, 1000);
})

// Promise.resolve().then(()=>{console.log('this is second prom ')})

setTimeout(() => {
    console.log('this is time out ')
}, 1000 );

console.log('do somethigng ')

handleClick()  

function handleClick(){

    p1
    .then(()=>{
        console.log("resolved succes fully inside a function ")
        throw new Error('inside p1')
    })
    .then(()=>{console.log("this is chaining ")})
    .catch(()=>{console.log("somting went wrong ")})

}
