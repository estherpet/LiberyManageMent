const Book = require("../backend/book.js").Book

class Library{
    constructor(){
        let books =[]

        this.addBook = (title, author, isbn) =>{
            let b = new Book(title, author, isbn)
            books.push(b);
        }

       this.deletebook = (title) => {
        for(let b of books){
            if(b.title===title){
                books.filter(b)
            }
        }
       }


    }


}

let lib = new Library()
lib.addBook("jjj","aaa","1234")
console.log(lib)
