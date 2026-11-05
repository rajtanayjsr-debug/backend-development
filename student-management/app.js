const express = require("express");

const app = express();
const PORT = 3000;

// Allows Express to read JSON data from POST requests
app.use(express.json());

// In-memory student data
let students = [
    { id: 1, name: "Rahul", course: "BCA" },
    { id: 2, name: "Amit", course: "MCA" },
    { id: 3, name: "Priya", course: "B.Tech" }
];

// Welcome route
app.get("/", (req, res) => {
    res.send("Welcome to Student Management Application");
});

// Display all students
app.get("/students", (req, res) => {
    res.json(students);
});

// Display a particular student
app.get("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id === parseInt(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

// Add a new student
app.post("/students", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

// Delete a student
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students = students.filter(s => s.id !== id);

    res.json({
        message: "Student deleted successfully"
    });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});