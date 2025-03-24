// Define a new type - called Book
type Book = {
    author: string,
    title: string,
    genre: Genre,
    available: boolean,
    publishedDate?: Date
}

enum Genre {
    NonFiction = "0",
    Fiction = "1",
    Fantasy = "2",
    ScienceFiction = "3",
    Biography = "4",
}


// Create 2 objecs of a book
/** 1st. book object */
let date = new Date(2020, 11, 24)
let aBook: Book = { 
    author: 'Agnon',
    title: 'Tmol Shilshom',
    genre: Genre.NonFiction,
    available: true,
    publishedDate: date
}

/** 2nd. book object */
date = new Date(2021, 12, 24)
let bBook: Book = { 
    author: 'Byalik',
    title: 'Arie baal guf',
    genre: Genre.Biography,
    available: true,
    publishedDate: date
}


/**
 * Add a book to array of books
 * @param allBooks 
 * @param aBook 
 * @returns Array of books
 */
function addBook(allBooks: Book[], aBook: Book): Book[] {
    allBooks.push(aBook)
    return allBooks
}

let allBooks: Book[] = [];
allBooks = addBook(allBooks, aBook);
allBooks = addBook(allBooks, bBook);
//console.log(allBooks);

/**
 * Get all books with a given genre
 * @param allBooks 
 * @param gn 
 * @returns a new aray of books with a given genre
 */
function searchByGenre(allBooks: Book[], gn: Genre) : Book[] {
    const genreArray = allBooks.filter(e => e.genre == gn);
    return genreArray;
}
let genreArray = searchByGenre(allBooks, Genre.Biography)
//console.log(genreArray);


/**
 * Update a fiels in array of objects
 * @param allBooks 
 * @param title 
 * @param available 
 */
function updateAvailabily(allBooks: Book[], title: string,  available: boolean) : void {
    const bookObj = allBooks.find(obj => obj.title === title);
    if(bookObj) {
        bookObj.available = available;
    }
}
updateAvailabily(allBooks, 'Arie baal guf', false);
console.log(allBooks);