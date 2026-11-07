// --- String Methods ---
const str = "Backend Development";

console.log("--- String Methods ---");
console.log("Original:", str);

// toUpperCase(): Converts all characters to uppercase
console.log("Upper Case:", str.toUpperCase());

// toLowerCase(): Converts all characters to lowercase
console.log("Lower Case:", str.toLowerCase());

// split(): Splits the string into an array
const words = str.split(" ");
console.log("Split by space:", words);


// --- Array Methods (Add, Read, Update) ---
console.log("\n--- Array Methods ---");

let items = ['Node', 'Express'];

// Add
items.push('MongoDB');
console.log("After Adding:", items);

// Read
console.log("First Item (Read):", items[0]);

// Update
items[0] = 'Node.js';
console.log("After Updating:", items);


// --- Object Methods (Add, Read, Update) ---
console.log("\n--- Object Methods ---");

let user = {
    name: "John",
    role: "Dev"
};

// Add
user.age = 25;
console.log("After Adding Key:", user);

// Read
console.log("User Name (Read):", user.name);

// Update
user.role = "Senior Dev";
console.log("After Updating Role:", user);