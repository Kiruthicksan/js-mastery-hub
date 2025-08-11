const animals = ["dog", "cat", "elephant"];
// Task: Print Dog, Cat, Elephant using forEach

const words = animals.forEach((animal, index,arr) => {
    arr[index] =  arr[index].charAt(0).toUpperCase() + arr[index].substring(1)
})

console.log(animals)