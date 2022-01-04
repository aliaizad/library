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
//a book object is created,
//the book is pushed into the array.
function addBook () {
    // const title = prompt('What is the title of your book?');
    // const author = prompt('Who is the author of this book?');
    // const pages = prompt('How many pages does this book have?');
    // let readStatus = prompt('Have you read this book?');
    const title = 'Communist Manifesto'
    const author = 'Karl Marx'
    const pages = '699'
    let readStatus = false;
    // if (readStatus.toLowerCase === 'yes') {
    //     readStatus = true;
    // } else {
    //     readStatus = false;
    // }
    const book = new Book (title, author, pages, readStatus);
    myLibrary.push(book);
}

const cardCon = document.getElementById('card-con');
//create a div in card-con
//print out the results in the div
//iterate next book
for (const book of myLibrary) {
    const card = document.createElement('div');
    console.log(book);
}
