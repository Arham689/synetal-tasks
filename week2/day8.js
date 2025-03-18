
const fs = require('fs')
// sync code (blocking code)
// const time = fs.appendFileSync('./logTime.txt' ,`${ new Date().getFullYear().toLocaleString()} \n`)
// const read = fs.readFileSync('./logTime.txt'  , 'utf-8')
// console.log(read)


// async code(non-blocking)
const time = new Date()  ;
fs.appendFile('./logTime.txt' ,`${ new Date().getTime().toLocaleString()} \n` , (err , data )=>{
    if(err) console.log('something went wrong in writing the file')
    console.log(time.toDateString(data))
})

fs.readFile('./logTime.txt'  , 'utf-8' , (err , data )=>{
    if(err) console.log('something went wrong in reading the file')
    console.log(time.toDateString(data))
})