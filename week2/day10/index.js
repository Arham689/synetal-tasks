const http = require('http')

const server = http.createServer((req,res)=>{
    res.statusCode = 300; 
    res.end(JSON.stringify({
        message : "hello world"
    }))
})

server.listen(8000 , ()=>{
    console.log('Your server is up and running ')
})
 