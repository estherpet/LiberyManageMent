let apiurl = "";

let dashboard = document.getElementById("dashboard");
(dashboard.innerText = "Welcome"), document.getElementById("").value;

let form = document.querySelector("form");

let browse = document.getElementById("browse");
let bookDetails = document.getElementById("bookdetails");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(browse.value);
});

// fetch(apiurl)
// .then((response)=>{return response.json()})
// .then((data)=>{
let book = ``;
// book +=  `<h1>Book Title: <span id="bookTitle">${}</span></h1>
// <h2>Author Name:  <span id="authorName">${}</span></h2>
// <p>Summary: <span id="summary">${}</span></p>
//<p>Availability: <span id="availability">${}</span></p>
// <img src=${} alt="book_image"/>
// `;
bookDetails.innerHTML = book;
// })
// .catch((error) => console.log(error.message));

let borrow = document.getElementById("borrowbutton");
borrow.addEventListener("click", () => {});

// let previouspage = document.getElementById("previouspage");
// previouspage.addEventListener("click", () => {});
