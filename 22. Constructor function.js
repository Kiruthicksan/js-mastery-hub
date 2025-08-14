function Book(title, author, year){
    this.title = title
    this.author = author
    this.year = year
    this.getSummary = function(){
        return `${this.title} by ${this.author}, publised in ${this.year}`
    }
}

const book1 = new Book("The Silent Voice", "Kiruthick" , 2026)
const book2 = new Book("Little Summer", "Kiruthick", 2025)

console.log(book1.getSummary())
console.log(book2.getSummary())