class Book{

    constructor(title, author,ISBN){
        this.title = title;
        this.author = author;
        this.availabilityStatus = Boolean(false);
        this.ISBN =ISBN;
    }
    set availabilityStatus(status){
        this.availabilityStatus = status;
    }
    get availabilityStatus(){
        return this.availabilityStatus;
    }
    set title(title){
        this.title = title;
    }
    set author(author){
        this.author = author;
    }
    get author(){
        return this.author;
    }
    set ISBN(ISBN){
        this.ISBN = ISBN;
    }
    get ISBN(){
        return this.ISBN;
    }
    
}

