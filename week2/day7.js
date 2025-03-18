
// REPL  -> read Eval print loop 
// const repl = require('node:repl');
// const msg = 'message';

// repl.start('> ').context.m = msg;

//process obj can access the arguments passed from commands
// -process.version
// -process.release
// -EventEmitter class
// -stdin,stdout,stderr
// process.stdout.write('Hello World!' + '\n');

// process is a object of EventEmitter class in node js 


/*  
In Node.js, the EventEmitter class is a core module that provides a way to handle asynchronous events. 
It allows objects to emit events and other objects to listen and respond to those events. The EventEmitter class 
is based on the publish-subscribe pattern, where event listeners subscribe to events and respond when those 
events are published.
*/

process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});
//USER_ID=239482 USER_KEY=foobar node day7.js
// console.log(process.env.USER_KEY)
// console.log(process.env.USER_ID)
console.log(process.env.NODE_ENV)
console.log('time started')

setTimeout(() => {
    console.log("time out over ")
}, 3000);

process.on('exit' , ()=>{
    console.log("the program exited ")
})

process.on("error" , ()=>{
    console.log('something went wrong ')
})
