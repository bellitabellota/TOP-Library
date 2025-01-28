const myLibrary = [];

function Book(title, author, pages, read) {
  if(!new.target) {
    throw Error("Must use the 'new' operator to call the function");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${ this.title } by ${ this.author }, ${ this.pages } pages, read: ${ this.read }`;
  }
}

function addBookToLibrary (title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}


addBookToLibrary("Shantaram", "Gregory David Roberts", 433, "true");
addBookToLibrary("Mongrel", "Hanako Footman", 352, "false");
addBookToLibrary("James", "Percival Everett", 320, "true");
addBookToLibrary("The Insider", "Matthew Richardson", 325, "false");

const libraryContainer = document.querySelector(".js-library-items");

function displayBooksInLibrary () {
  libraryContainer.innerHTML = null;
  myLibrary.forEach((book, book_index) => {
    libraryContainer.innerHTML += `<li> ${book.info()} <button class="js-remove-button" data-book-index="${book_index}">Remove</button></li>`;
  });

  addRemoveEventListener();
}

displayBooksInLibrary();

const newBookButton = document.querySelector(".js-new-book");
const dialog = document.querySelector(".js-new-book-dialog");
const addBookButton = document.querySelector(".js-add-book");

let titleFromInput = document.getElementById("title");
let authorFromInput = document.getElementById("author");
let pagesFromInput = document.getElementById("pages");
let readFromInput = document.getElementById("read");


newBookButton.addEventListener('click', () => {
 dialog.showModal();
});

let inputElements = document.querySelectorAll("input");

addBookButton.addEventListener("click", (event) => {
  event.preventDefault();

  addBookToLibrary(titleFromInput.value, authorFromInput.value, pagesFromInput.value, readFromInput.value);

  displayBooksInLibrary();

  inputElements.forEach((input) => {
    input.value = "";
  });

  dialog.close();
});

function addRemoveEventListener () {
  document.querySelectorAll(".js-remove-button").forEach((button) => {
    button.addEventListener(("click"), () => {
      myLibrary.splice(button.dataset.bookIndex, 1);
  
      displayBooksInLibrary();
    }); 
  });
}


