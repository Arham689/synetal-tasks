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

console.log("%cExtra Large Yellow Text with Red Background", "background: red; color: yellow; font-size: x-large");