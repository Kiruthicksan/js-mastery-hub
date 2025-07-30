let word = "hi"
let reversed = ""

for (let i = word.length - 1; i >= 0; i--){
    reversed += word[i]
}

if (reversed === word){
    console.log(`The word ${word} is palindrome`)
} 
else{
    console.log(`The word ${word} is not a palindrome`)
}
