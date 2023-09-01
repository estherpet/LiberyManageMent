const{Book} = require("../backend/book.js")
const Books = []

class Library{
    addBook(titile, author, ISBN){
        const book = new Book(titile, author, ISBN);
        Books.push(book);
    }


}
let l= new Library();
l.addBook("john", "miko","2222334")
console.log(l)