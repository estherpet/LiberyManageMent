class Book{

    constructor(title, author,ISBN){
        this.title = title;
        this.author = author;
        this.availabilityStatus = Boolean(false);
        this.ISBN =ISBN;
    }
    set setAvailabilityStatus(status){
        this.availabilityStatus = status;
    }
    get getAvailabilityStatus(){
        return this.availabilityStatus;
    }
    set setTitle(title){
        this.title = title;
    }
    set setAuthor(author){
        this.author = author;
    }
    get getAuthor(){
        return this.author;
    }
    set setISBN(ISBN){
        this.ISBN = ISBN;
    }
    get getISBN(){
        return this.ISBN;
    }
    
}

