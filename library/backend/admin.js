let books = []
function addItem(table,title, author, isbn, qty){
    let bookRow = document.createElement("tr");

    let titleData = document.createElement("td")
    let authorData = document.createElement("td")
    let isbnData =document.createElement("td")
    let qtyData = document.createElement("td")
    let actiondata = document.createElement("button")

    titleData.innerText = title;
    authorData.innerText = author;
    isbnData.innerText = isbn;
    qtyData.innerText = qty;
    actiondata.innerHTML = "delete";

    bookRow.append(titleData, authorData, isbnData, qtyData)
    table.childNodes[1].appendChild(bookRow);
}
var table = document.getElementById("bookTable");
let form = document.getElementsByTagName("input");

// const title = document.querySelector("#bookTitle").value;
// const author = document.querySelector("#author").value;
// const isbn = document.querySelector("#isbn").value;
// const qty = document.querySelector("#qty").value;

 function addBook(){
    event.preventDefault()
    let title= form[0].value
    let author = form[1].value
    let isbn = form[2].value
    let qty = form[3].value
    addItem(table,title,author,isbn,qty)
    console.log(title + author + isbn + qty)
    clearInput()
 }
 function clearAll(){
    form[0].value = "";
    form[1].value = "";
    form[2].value = "";
    form[3].value = "";
 }
 function clearInput() {
    form[0].value = "";
    form[1].value = "";
    form[2].value = "";
    form[3].value = "";
}

