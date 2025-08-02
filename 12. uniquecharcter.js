// Write a function hasUniqueChars(str) that takes a string and returns true if all characters in the string are unique (no duplicates), otherwise returns false.

function hasUniqueChars(str){
    let frequencyMap = {}

    for (let char of str){
        if (frequencyMap[char]){
            frequencyMap[char]++
        }

        else{
            frequencyMap[char] = 1
        }
    }

    

    for (let key in frequencyMap){
        if (frequencyMap[key] > 1){
            return false
        }
       
    }

    return true
}



console.log(hasUniqueChars("abcdefg")) 

// using for loop

let str = "abcd"
let isUnique = true

for (let i =0; i < str.length; i++){
    for (let j = i + 1; j< str.length; j++){
        if (str[i] === str[j]){
            isUnique = false 
            break;
        }
    }
    if (!isUnique)
        break
  
}

console.log(isUnique)


