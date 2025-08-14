function createUser(name,age){
    return{
        name,
        age,
        introduce(){
            return `Hi, I am  ${name} and I am ${age} years old`
        }
    }
}

const user1 = createUser("Kiruthick", 21)
const user2 = createUser("Steve", 24)

console.log(user1.introduce())
console.log(user2.introduce())