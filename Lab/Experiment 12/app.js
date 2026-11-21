const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;


// ==================================================
// MIDDLEWARE
// ==================================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ==================================================
// TASK 1 - BASIC EXPRESS ROUTES
// ==================================================

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});


app.get("/about", (req, res) => {
    res.send("This is the About Page");
});


app.get("/contact", (req, res) => {
    res.send("Contact us at: student@example.com");
});


// ==================================================
// URL PARAMETER DEMONSTRATION
// ==================================================

app.get("/user/:name", (req, res) => {

    const name = req.params.name;

    res.send(`Hello, ${name}!`);
});


// ==================================================
// TASK 2 - CALCULATOR API
//
// Example:
// /calculate?num1=10&num2=5&op=add
// ==================================================

app.get("/calculate", (req, res) => {

    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const operation = req.query.op;

    let result;


    if (Number.isNaN(num1) || Number.isNaN(num2)) {

        return res.status(400).json({
            error: "Please provide valid numbers."
        });
    }


    switch (operation) {

        case "add":
            result = num1 + num2;
            break;

        case "sub":
            result = num1 - num2;
            break;

        case "mul":
            result = num1 * num2;
            break;

        case "div":

            if (num2 === 0) {

                return res.status(400).json({
                    error: "Division by zero is not allowed."
                });
            }

            result = num1 / num2;
            break;

        default:

            return res.status(400).json({
                error: "Invalid operation. Use add, sub, mul, or div."
            });
    }


    res.json({
        num1,
        num2,
        operation,
        result
    });
});


// ==================================================
// POST / BODY DATA DEMONSTRATION
// ==================================================

app.get("/form", (req, res) => {

    res.sendFile(
        path.join(__dirname, "form.html")
    );
});


app.post("/submit", (req, res) => {

    const { name, course } = req.body;

    res.json({

        message: "Data received successfully",

        student: {
            name,
            course
        }

    });
});


// ==================================================
// TASK 3 - STUDENT MANAGEMENT API
// ==================================================

let students = [

    {
        id: 1,
        name: "Aarav",
        course: "B.Tech CSE"
    },

    {
        id: 2,
        name: "Meera",
        course: "B.Tech IT"
    },

    {
        id: 3,
        name: "Kabir",
        course: "B.Tech CSE"
    }

];


// --------------------------------------------------
// GET ALL STUDENTS
// --------------------------------------------------

app.get("/students", (req, res) => {

    res.json(students);
});


// --------------------------------------------------
// GET STUDENT BY ID
// Example: /students/2
// --------------------------------------------------

app.get("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(
        student => student.id === id
    );


    if (!student) {

        return res.status(404).json({
            error: "Student not found"
        });
    }


    res.json(student);
});


// --------------------------------------------------
// DISPLAY ADD STUDENT FORM
// --------------------------------------------------

app.get("/add-student", (req, res) => {

    res.sendFile(
        path.join(__dirname, "student-form.html")
    );
});


// --------------------------------------------------
// ADD NEW STUDENT
// POST /students
// --------------------------------------------------

app.post("/students", (req, res) => {

    const { name, course } = req.body;


    if (!name || !course) {

        return res.status(400).json({
            error: "Name and course are required."
        });
    }


    const newStudent = {

        id: students.length + 1,

        name,

        course
    };


    students.push(newStudent);


    res.status(201).json({

        message: "Student added successfully",

        student: newStudent

    });
});


// ==================================================
// START SERVER
// ==================================================

app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

    console.log("\nAvailable Routes:");

    console.log("GET  /");
    console.log("GET  /about");
    console.log("GET  /contact");

    console.log("GET  /user/:name");

    console.log("GET  /calculate");

    console.log("GET  /form");
    console.log("POST /submit");

    console.log("GET  /students");
    console.log("GET  /students/:id");

    console.log("GET  /add-student");
    console.log("POST /students");
});