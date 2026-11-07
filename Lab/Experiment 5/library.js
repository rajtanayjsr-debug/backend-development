// Library Management Utility

// 1. Define an array named library
const library = [];

// 2. Function to add a new book
function addBook(title, author) {
    const book = {
        title: title,
        author: author
    };

    library.push(book);

    console.log(`Book added: ${title} by ${author}`);
}

// 3. Function to find a book by title
function findBook(title) {
    return library.find(book => book.title === title);
}

// 4. Test the functions
console.log("--- Library Management ---");

addBook("The Alchemist", "Paulo Coelho");
addBook("Atomic Habits", "James Clear");
addBook("The Hobbit", "J.R.R. Tolkien");

console.log("\nLibrary:");
console.log(library);

console.log("\nSearching for Atomic Habits:");

const foundBook = findBook("Atomic Habits");

if (foundBook) {
    console.log("Book Found:", foundBook);
} else {
    console.log("Book not found.");
}