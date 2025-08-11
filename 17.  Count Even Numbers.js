const numbers = [5, 10, 3, 8, 2, 1];
// Task: Use forEach to count how many numbers are even
let evenCount = 0
numbers.forEach(num => {
    if(num % 2 == 0){
        evenCount++
    }
})

console.log(evenCount)