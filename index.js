"use strict";
var Genre;
(function (Genre) {
    Genre["NonFiction"] = "0";
    Genre["Fiction"] = "1";
    Genre["Fantasy"] = "2";
    Genre["ScienceFiction"] = "3";
    Genre["Biography"] = "4";
})(Genre || (Genre = {}));
// Create 2 objecs of a book
/** 1st. book object */
let date = new Date(2020, 11, 24);
let aBook = {
    author: 'Agnon',
    title: 'Tmol Shilshom',
    genre: Genre.NonFiction,
    available: true,
    publishedDate: date
};
/** 2nd. book object */
date = new Date(2021, 12, 24);
let bBook = {
    author: 'Byalik',
    title: 'Arie baal guf',
    genre: Genre.Biography,
    available: true,
    publishedDate: date
};
/**
 * Add a book to array of books
 * @param allBooks
 * @param aBook
 * @returns Array of books
 */
function addBook(allBooks, aBook) {
    allBooks.push(aBook);
    return allBooks;
}
let allBooks = [];
allBooks = addBook(allBooks, aBook);
allBooks = addBook(allBooks, bBook);
//console.log(allBooks);
/**
 * Get all books with a given genre
 * @param allBooks
 * @param gn
 * @returns a new aray of books with a given genre
 */
function searchByGenre(allBooks, gn) {
    const genreArray = allBooks.filter(e => e.genre == gn);
    return genreArray;
}
let genreArray = searchByGenre(allBooks, Genre.Biography);
//console.log(genreArray);
/**
 * Update a fiels in array of objects
 * @param allBooks
 * @param title
 * @param available
 */
function updateAvailabily(allBooks, title, available) {
    const bookObj = allBooks.find(obj => obj.title === title);
    if (bookObj) {
        bookObj.available = available;
    }
}
updateAvailabily(allBooks, 'Arie baal guf', false);
console.log(allBooks);
