const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page');
});
app.get('/api/user', (req, res) => {
    res.json({
        name: 'Raj',
        course: 'Backend Development',
        year: 3
    });
});
app.get('/user/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});