const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para mostrar el formulario
app.get('/form', (req, res) => {
    res.send('<form action="/submit-form" method="post">' +
                '<input type="text" name="username" />' +
                '<input type="submit" value="Submit" />' +
             '</form>');
});

// Ruta para procesar el formulario
app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    res.send(`Received submission with username: ${username}`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
