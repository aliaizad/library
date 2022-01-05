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
//the book is pushed into the arra
const form  = document.querySelector('form');
form.addEventListener('submit', createAndAddBook);

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const yes = document.getElementById('yes');

function createAndAddBook (e) {
    let readStatus;
    e.preventDefault();
    (yes.checked) ? readStatus = true: readStatus = false;
    const book = new Book(title.value, author.value, pages.value, readStatus);
    myLibrary.push(book);
    showBook();
    form.reset();
}

//add a button that opens the form
const open = document.getElementById('openform');
open.addEventListener('click', openForm);

function openForm() {
    if (form.classList.contains('close')) {
        form.classList.remove('close');
    }
}

//add a button that close the form
const close = document.getElementById('close');
close.addEventListener('click', closeForm);

function closeForm() {
    form.classList.add('close');
}

const cardCon = document.getElementById('card-con');
//make a function that shows items in myLib on the page
function showBook () {
    while (cardCon.firstChild) {
        cardCon.removeChild(cardCon.lastChild);
    }

    for (const book of myLibrary) {
        const card = document.createElement('div')
        card.setAttribute('style', 'white-space: pre;');
        if (book.readStatus) {
            card.textContent = `${book.title}\r\nAuthor: ${book.author}\r\nTotal pages: ${book.pages}\r\nStatus: Read`
        } else {
            card.textContent = `${book.title}\r\nAuthor: ${book.author}\r\nTotal pages: ${book.pages}\r\nStatus: Unread`
        }
        const index = myLibrary.indexOf(book);
        //add remove button
        const remove = document.createElement('button');
        remove.setAttribute('class', index);
        remove.textContent = 'Remove Book';
        remove.addEventListener('click', removeObject);
        //add read toggle button;
        const toggle = document.createElement('button');
        toggle.setAttribute('class', index);
        toggle.textContent = 'Change Read Status';
        toggle.addEventListener('click', toggleStatus);
        card.appendChild(toggle);
        card.appendChild(remove);
        cardCon.appendChild(card);
    }
}

//when you click the remove button;
//the object associated with the button will be removed from the array;
//the showbook function will run again;
function removeObject(e) {
    const index = +e.target.className;
    myLibrary.splice(index, 1);
    showBook();
}

function toggleStatus(e) {
    const index = +e.target.className;
    const status = myLibrary[index].readStatus;
    if (status) {
        myLibrary[index].readStatus = false;
    } else {
        myLibrary[index].readStatus = true;
    }
    showBook();
}