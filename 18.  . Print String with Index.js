const names = ['Alice', 'Bob', 'Charlie'];
// Task: Print "Index 0: Alice", etc.

const stingIndex = names.forEach((name, index,arr) =>{
    arr[index] = `Index ${index}: ${arr[index]}`
})

console.log(names)