let arrays = [22,33,22,11,4,2]

let first = -Infinity
let second = -Infinity

for (let arr of arrays){
    if (arr > first){
        second = first
        first = arr
    }
    else if(arr > second && num < first){
        second = arr
    }
}

console.log(second !== -Infinity ? second : "Second Large Number not avialable")