function findingMostFrequentElement(fruits){
    // finding Frequency of array

    let frequencyMap = {};

    for (let fruit of fruits){
        if (frequencyMap[fruit]){
            frequencyMap[fruit]++
        }
        else{
            frequencyMap[fruit] = 1
        }
    }

    let maxCount = 0;
    let mostFrequentElement = null

    for (let key in frequencyMap){
        if (frequencyMap[key] > maxCount){
            maxCount = frequencyMap[key]
            mostFrequentElement = key
        }
    }
    return mostFrequentElement;
}

const fruits = findingMostFrequentElement(["apple", "banana", "apple", "orange", "grapes", "grapes", "apple"])
console.log(fruits)