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
    return `${ this.title } by ${ this.author }, ${ this.pages } pages, ${ this.read }`;
  }
}

const myFavorite = new Book("Shantaram", "Gregory David Roberts", 433, "read twice");

console.log(myFavorite.info());