//let apiurl = "https://gutendex.com/books";

let dashboard = document.getElementById("dashboard");
dashboard.innerText = "Welcome";
//document.getElementById("").value;

let form = document.querySelector("form");

let browse = document.getElementById("browse");
let bookDetails = document.getElementById("bookdetails");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(browse.value);
  fetch(`https://gutendex.com/books?search=${browse.value}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response.results);
      let books = "";
      response.results.map((book) => {
        
        return (books += 
        `<h1>Book Title: <span id="bookTitle">${book.title}</span></h1>
<h2>Author Name: <span id="authorName">${book.authors[0].name}</span></h2>
 <img src=${book.formats[`image/jpeg`]} alt="book_image"/> 
 <button id="borrowbutton">Borrow</button>`)

})
 
   bookDetails.innerHTML = books;
})
 });


/* <p>
  Availability: <span id="availability">${}</span>
</p>; */


// 	.catch((error) => {
// 		// Handle errors
// 		console.error("Error:", error);
// 	});


// .then((data)=>{
//let book = ``;
//book += `<h1>Book Title: <span id="bookTitle">${}</span></h1>
// <h2>Author Name:  <span id="authorName">${}</span></h2>
// <p>Summary: <span id="summary">${}</span></p>
//<p>Availability: <span id="availability">${}</span></p>
// <img src=${} alt="book_image"/>
// `;
//bookDetails.innerHTML = book;
// })
// .catch((error) => console.log(error.message));

// let borrow = document.getElementById("borrowbutton");
// borrow.addEventListener("click", () => {});

// let previouspage = document.getElementById("previouspage");
// previouspage.addEventListener("click", () => {});
