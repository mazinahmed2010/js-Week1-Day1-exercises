
// Day 1 Exercises


// --- Exercise 1: Comments and Documentation ---
console.log("--- 1. Comments and Documentation ---");
// This is a single-line comment.
/*
This is a multi-line comment used for documentation
of these exercises.
*/
console.log("Comments added successfully.");

// --- Exercise 2: Variable Declaration with let ---
console.log("\n--- 2. Variable Declaration with let ---");
let userName = "Mazin";
let userAge = 32;
console.log(`User Name: ${userName}, User Age: ${userAge}`);
userAge = 33; 
console.log(`User Age after reassignment: ${userAge}`);

// --- Exercise 3: Variable Declaration with const ---
console.log("\n--- 3. Variable Declaration with const ---");
const pi = 3.14159;
const websiteName = "Code Exercises";
console.log(`PI value: ${pi}, Website Name: ${websiteName}`);


// --- Exercise 4: Checking Data Types ---
console.log("\n--- 4. Checking Data Types ---");
let name = "Ali";
let age = 25;
let isStudent = true;
let car;
console.log(`Type of 'Ali': ${typeof name}`);
console.log(`Type of 25: ${typeof age}`);
console.log(`Type of true: ${typeof isStudent}`);
console.log(`Type of unassigned variable: ${typeof car}`);

// --- Exercise 5: String Data Type ---
console.log("\n--- 5. String Data Type ---");
let firstName = "Mazin";
let lastName = "Ahmed";
let fullName = firstName + " " + lastName;
console.log(`Full Name (Concatenation): ${fullName}`);
let greeting = `Hello, my name is ${firstName} ${lastName}!`;
console.log(`Greeting (Template Literal): ${greeting}`);

// --- Exercise 6: Number Data Type ---
console.log("\n--- 6. Number Data Type ---");
let num1 = 10;
let num2 = 3;
console.log(`Addition (10 + 3): ${num1 + num2}`);
console.log(`Division (10 / 3): ${num1 / num2}`);
console.log(`Modulo (10 % 3): ${num1 % num2}`);

// --- Exercise 7: Boolean Data Type ---
console.log("\n--- 7. Boolean Data Type ---");
let isRaining = true;
let canVote = age >= 18;
console.log(`Is it raining? ${isRaining}`);
console.log(`Can a person of age ${age} vote? ${canVote}`);

// --- Exercise 8: Undefined vs Null ---
console.log("\n--- 8. Undefined vs Null ---");
let favoriteColor; 
let carModel = null; 
console.log(`favoriteColor (undefined): ${favoriteColor}`);
console.log(`carModel (null): ${carModel}`);
console.log(`Compare null and undefined with == : ${carModel == favoriteColor}`); 

// --- Exercise 9: Using typeof Operator (and typeof null quirk) ---
console.log("\n--- 9. Using typeof Operator ---");
console.log(`Type of null: ${typeof null}`); 
console.log(`Type of a function: ${typeof function() {}}`);

// --- Exercise 10: Console.log() Practice ---
console.log("\n--- 10. Console.log() Practice ---");
let variableA = 5;
let variableB = 10;
console.log("Logging multiple items:", variableA, variableB, "sum is:", variableA + variableB);
