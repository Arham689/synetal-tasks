let arr = [1,4,23,23,2,32,3,23,2,378 ,55,3,2,5,2,57,];
// finding avg 
const findavg = (arr)=>{
    let sum = 0 ; 

    for(let i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }
    
    let avg= sum / arr.length ; 
    
    console.log(avg);
}

findavg(arr)

// array filter
const arrayFilter = (arr)=>{
    let ans = arr.filter((i)=> i%2===0)

    console.log(ans)
}

arrayFilter(arr)

// log fromats string

// %s → Formats the value as a string.

// %i or %d → Formats the value as an integer.

// %f → Formats the value as a floating-point value.

// %o → Formats the value as an expandable DOM element, as seen in the Elements panel.

// %O → Formats the value as an expandable JavaScript object.

// %c → Applies CSS style rules to the output string as specified by the second parameter.
const obj1 = {
    1 : "test",
    
}

const obj2 = {
    "hwllo"  : "world",
    ...obj1
}

for(let i in obj2){
    console.log(`key:${i} , value : ${obj2[i]}`)
}
        
let myData =null;

fetch('https://freetestapi.com/api/v1/students')
.then(response => response.json())
.then(data => {
    myData = data;

    // console.log("Inside fetch:", myData);
})
.catch(error => {
    console.error("Error fetching data:", error);
});


console.log(myData)


let goodstudents = myData.filter(  s  => s.gpa >= 3.7 )
// console.log(goodstudents)

let avg = myData.reduce((acc , curr)=>
        acc + curr.gpa 
 , 0 )

 console.log(avg)

