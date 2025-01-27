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


addBookToLibrary("Shantaram", "Gregory David Roberts", 433, "twice");

addBookToLibrary("Mongrel", "Hanako Footman", 352, "not yet");

const libraryContainer = document.querySelector(".js-library-items");

myLibrary.forEach((book) => {
  console.log(book.info());
  libraryContainer.innerHTML += `<li> ${book.info()} </li>`;
});