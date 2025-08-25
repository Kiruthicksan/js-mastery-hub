const findingLargest = (n1, n2, n3) => {

    if ( typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number'){
        return `All numbers must be numbers`
    }

    if (n1 === n2 && n2 === n3){
        return "All numbers are equal"
    }


  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
};

let res = findingLargest(4,3,1)
let res1 = findingLargest(5,5,5)
let res2 = findingLargest(1,2,-5)
console.log(res)
console.log(res1)
console.log(res2)



// Math.max method

const findingLargestUsingMax = (a,b,c) => {
    console.log(Math.max(a,b,c))
}

findingLargestUsingMax(4,5,6)
