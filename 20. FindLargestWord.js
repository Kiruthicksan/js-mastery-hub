function findLargestWord(sentence){
    const words = sentence.split(' ')
    let longestWord = ""
    let maxLength = 0
    
    for (let word of words){
        if (word.length > maxLength){
            longestWord = word
            maxLength = word.length
        }
    }

    return longestWord
}

let result = findLargestWord("I am calm, emotionally Inteligent and fearless person")
console.log(result)