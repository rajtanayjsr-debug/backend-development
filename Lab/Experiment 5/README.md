# Experiment 05: JavaScript Arrays, Objects and Functions

## Course Outcome
CO2 – Create and build web pages and applications.

## Objective

To understand and implement JavaScript arrays, objects, functions, string methods, array manipulation, object manipulation, and execute JavaScript programs using both the browser and Node.js.

## Technologies Used

- JavaScript
- HTML5
- Node.js
- Browser Console

## Tasks Performed

### Task 1 – Basic JavaScript

Created `script.js` to demonstrate JavaScript arrays, objects, and functions.

#### Arrays
- Created an array of fruits.
- Used `push()` to add a new element.
- Displayed the array using `console.log()`.

#### Objects
Created a student object containing:
- Name
- Age
- Course

Accessed object properties using dot notation.

#### Functions
Created a `greet(name)` function that accepts a name and returns a greeting message.

The program was successfully executed using:

`node script.js`

---

### Task 2 – Advanced JavaScript Methods

Created `script2.js` to demonstrate string, array, and object manipulation.

#### String Methods

Used:
- `toUpperCase()`
- `toLowerCase()`
- `split()`

#### Array Operations

Performed:
- Add using `push()`
- Read using array index
- Update using array index

#### Object Operations

Performed:
- Add a new property
- Read a property
- Update an existing property

The program was successfully executed using:

`node script2.js`

---

### Task 3 – HTML Integration

Created `index.html` and connected the JavaScript file using:

`<script src="script.js"></script>`

The HTML page was successfully opened in the browser.

The JavaScript output can be viewed using the browser developer console.

---

### Task 4 – Node.js Execution

Both JavaScript programs were successfully executed from the terminal using Node.js.

Commands used:

`node script.js`

`node script2.js`

---

## PBL Activity – Library Management Utility

Created `library.js` to manage a collection of books.

### Library Array

An array named `library` was created to store book objects.

Each book contains:
- Title
- Author

### addBook(title, author)

The `addBook()` function creates a new book object and adds it to the library array.

### findBook(title)

The `findBook()` function searches the library array and returns the book whose title matches the requested title.

### Testing

The following books were added:

- The Alchemist – Paulo Coelho
- Atomic Habits – James Clear
- The Hobbit – J.R.R. Tolkien

The program successfully searched for `Atomic Habits` and returned:

`{ title: 'Atomic Habits', author: 'James Clear' }`

The PBL program was executed using:

`node library.js`

---

## Files Included

- `script.js` – Arrays, objects and functions
- `script2.js` – String, array and object methods
- `index.html` – Browser integration
- `library.js` – PBL library management activity
- `README.md` – Experiment documentation

## Key Concepts Learned

- JavaScript Arrays
- JavaScript Objects
- JavaScript Functions
- String Methods
- Array Manipulation
- Object Manipulation
- `push()`
- `find()`
- Function Parameters
- Returning Values
- Browser JavaScript Integration
- Node.js Execution
- Managing Collections of Objects

## Conclusion

In this experiment, JavaScript arrays, objects and functions were implemented and tested successfully. String, array and object manipulation methods were also demonstrated. JavaScript programs were executed using Node.js and integrated with an HTML page. The PBL activity demonstrated how arrays of objects and functions can be used to implement a simple library data management utility.