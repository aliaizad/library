//Book object constructor
function Book (title, author, pages, readStatus = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

Book.prototype = {
    info () {
        if (this.readStatus) {
            return `${this.title} by ${this.author}, ${this.pages} pages, book read!`
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, book not read.`
        }
    }
}
//set up an empty library
let myLibrary = [];
//user inputs their book details
const form  = document.querySelector('form');
form.addEventListener('submit', callbackFn);
const title = document.getElementById('title');
function callbackFn(e) {
    e.preventDefault();
    console.log(title.value);
}
//a book object is created,
//the book is pushed into the array.

